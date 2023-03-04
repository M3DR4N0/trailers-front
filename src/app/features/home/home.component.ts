import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let yube = document.querySelector('iframe');
    let backBtn = document.querySelector('.go-back') as HTMLButtonElement;

    backBtn.style.display = 'none';

    backBtn.addEventListener('click', (e) => {
      yube.style.display = 'none';
      backBtn.style.display = 'none';
      document.querySelectorAll('section img').forEach(x => (x as HTMLImageElement).style.display = '');
      e.stopPropagation();
    });

    document.querySelectorAll('section img').forEach(item => {
      item.addEventListener('click', (e) => {
        backBtn.style.display = '';

        document.querySelectorAll('section img').forEach(x => (x as HTMLImageElement).style.display = 'none');
        yube.style.display = '';
        //yube.src += '?autoplay=1&showinfo=0&modestbranding=1&rel=0';
        yube.style.width = '100%';
      })
    })
  }

}
