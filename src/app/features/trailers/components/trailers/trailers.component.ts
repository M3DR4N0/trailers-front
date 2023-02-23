import { Component, OnInit, Input, Output } from '@angular/core';
import { TrailersService } from 'src/app/core/services/trailers.service';
import { Trailer } from 'src/app/shared/models/trailer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})

export class TrailersComponent implements OnInit  {
  @Input() search: string;

  trailers: Trailer[];
  // https://www.youtube.com/embed/
  constructor(public service: TrailersService) {}

  ngOnInit(){
    this.displayTrailers(this.search);
  } 

  displayTrailers(trailerSearch?: string){
    if (trailerSearch) {
      this.service.search(trailerSearch).subscribe(data => this.trailers = data);    
      return;
    }

    this.service.get().subscribe(data => this.trailers = data);    
  }
}
