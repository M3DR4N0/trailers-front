import { Component, OnInit, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { TrailersService } from 'src/app/modules/core/services/trailers.service';
import { Trailer } from 'src/app/modules/shared/models/trailer';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})

export class TrailersComponent implements OnInit  {
  trailers: Trailer[];
  // https://www.youtube.com/embed/
  constructor(public service: TrailersService) {}

  ngOnInit(){
    this.displayTrailers();
  } 

  displayTrailers(){
    this.service.get().subscribe(data => this.trailers = data);    
  }
}
