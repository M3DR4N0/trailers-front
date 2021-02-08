import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import Swal from 'sweetalert2';
import { Trailer } from '../../interfaces/trailer';
import { TrailersService } from '../../services/trailers.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent extends AppComponent implements OnInit {
  yearsArr = [];
  
  ngOnInit(): void {
    this.spinner();
    for(let i = 1980; i <= 2025; i++){
      this.yearsArr.push(i);
    }
  }

  saveTrailer(){
    var input: any = document.getElementsByClassName('form-control');

    if(this.editing){
      if(input[0].value != '' || input[1].value != '' || 
         input[2].value != '' || input[3].value != ''){
        this.trailersService.put(this.trailers).subscribe((data) => {
          this.getTrailers();
          alert('Trailer actualizado!');
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('Ocurrio un error');
        });
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Verifique los datos introducidos!'
        })
      }
    } else{
      if(input[0].value != '' || input[1].value != '' || 
         input[2].value != '' || input[3].value != ''){
          this.trailersService.save(this.trailers).subscribe((data) => {
            this.getTrailers();
            alert('Trailer agregado!');
            console.log(data);
          }, (error) => {
            console.log(error);
            alert('Ocurrio un error');
          });
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Verifique los datos introducidos!'
        })
      }
      
    }
  }

  delete(id){
    Swal.fire({
      icon: 'warning',
      title: 'Estas seguro?',
      text: 'No podras volver atras',
      showCancelButton: true
    }).then((result) => {
      if(result.value){
        this.trailersService.delete(id).subscribe(() => {
          this.getTrailers();
          Swal.fire({
            icon: 'success',
            title: 'Trailer borrado!',
            showConfirmButton: false,
            timer: 2000
          });
        }, (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error!',
            showConfirmButton: false,
            timer: 2000
          });
        });
      }
       
    });
  }
}
