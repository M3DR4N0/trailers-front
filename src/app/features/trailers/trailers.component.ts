import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trailer } from 'src/app/core/models/trailer';
import { TrailersService } from './services/trailers.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})

export class TrailersComponent implements OnInit  {

  trailers: Trailer[];
  // https://www.youtube.com/embed/
  constructor(public service: TrailersService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.queryParams
      .subscribe(params => {
        this.displayTrailers(params['s']);
      }
    );
  } 

  displayTrailers(trailerSearch?: string){
    if (trailerSearch) {
      this.service.search(trailerSearch).subscribe(data => this.trailers = data);    
      return;
    }

    this.service.getAll().subscribe(data => this.trailers = data);    
  }
}
