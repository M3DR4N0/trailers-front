import { Component, OnInit, Input } from '@angular/core';
import { TrailersService } from './services/trailers.service';
import { Trailer } from './interfaces/trailer';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { concat } from 'rxjs';
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

  trailers: Trailer = {
    title: '',
    imgUrl: '',
    year: '',
    url: ''
  };

  trailersArr: Trailer[];
  id: any;
  titleTrailer: any;
  editing: boolean = false;

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
