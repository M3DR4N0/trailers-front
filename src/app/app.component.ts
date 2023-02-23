import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router){

  }

  onSubmit(input: HTMLInputElement){
    
    this.router.navigate(
      ['trailers/search'],
      { queryParams: { s: input.value } }
    );
  }
}

