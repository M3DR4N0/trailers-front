import { Component } from '@angular/core';
import { TrailersService } from './modules/core/services/trailers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public trailersService: TrailersService){}
}

