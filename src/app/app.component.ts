import { Component, OnInit, Input } from '@angular/core';
import { TrailersService } from './services/trailers.service';
import { Trailer } from './interfaces/trailer';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { concat } from 'rxjs';
import { SearchPipe } from './pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trailers';

  collection = [];
  p: number = 1;

  searchTrailer: Trailer[];
  SearchPost = '';
  Press = false;
  pipe: SearchPipe;
  searchBar(){
    var searchBar: any = document.getElementById('searchBar');
    var searchBtn: any = document.getElementById('btnSearch');
    
    if(!this.Press){
      searchBar.style.display = 'block';
      searchBar.focus();
      this.Press = true;
      searchBar.style.border = 'none';
    } else{
      if(searchBar.value == ''){
        searchBar.style.display = 'none';
        this.Press = false;
      } else{
        Swal.fire({
          icon: 'warning',
          title: 'Espera!',
          text: 'La barra de busqueda tiene texto, debes vaciarla para continuar',
          width: 400
        })
      }
      
    }
    
  }

  trailers: Trailer = {
    title: null,
    imgUrl: null,
    year: null,
    url: null,
    genero: null
  };

  trailersArr: Trailer[];
  id: any;
  titleTrailer: any;
  editing: boolean = false;

  API_ENDPOINT = 'https://localhost:5001/api';

  constructor(public trailersService: TrailersService, private activatedRoute: ActivatedRoute, 
    private spinnerService: NgxSpinnerService){

    this.id = activatedRoute.snapshot.params['id'];
    if(this.id){
      trailersService.get().subscribe((data: Trailer[]) => {
        this.trailersArr = data;
        this.trailers = this.trailersArr.find((a) => { return a.id == this.id })
      }, (error) => {
        console.log(error);
      })
      this.editing = true;
    } else{
      this.editing = false;
    }
    this.getTrailers();
  }

  getTrailers(){
    this.trailersService.get().subscribe((data: Trailer[]) => {
      this.trailersArr = data;
      this.collection = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error!');
    })
  }

  showTrailers(title){
    this.trailersService.show(title).subscribe((data: Trailer[]) => {
      this.trailersArr = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error!');
    })
  }

  ngOnInit(){
    this.spinner();
  }

  spinner(){
    //document.getElementById('hide').style.opacity = '0';
    this.spinnerService.show();
    setTimeout(() => {
      //document.getElementById('hide').style.opacity = '1';
      this.spinnerService.hide();
    }, 1000);
  }
}
