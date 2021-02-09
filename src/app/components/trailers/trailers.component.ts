import { Component, OnInit, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { AppComponent } from '../../app.component';
import { EventEmitter } from 'protractor';
import { PaginationInstance } from 'ngx-pagination';
//import { MatPaginator, PageEvent } from '@angular/material/paginator';
//import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})

export class TrailersComponent extends AppComponent implements OnInit  {


  ngOnInit(){ 
    this.spinner();
  } 

  onClick(src: string){
    let url = (src.includes('https://www.youtube.com/watch?v='))
              ? src.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/') 
              : src;

    let IframeHtml: string = `<iframe width="100%" height="500" src="${url}?autoplay=1" frameborder="1" style="background: #000" allow="accelerometer; \
                         autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    Swal.fire({
      width: '50rem',
      heightAuto: true,
      background: 'transparent',
      html: IframeHtml,
      backdrop: '#000000dc',
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: '<button class="btn btn-danger border-none"><i class="fa fa-close"></i></button>',
      allowOutsideClick: false
    })
  }
  
  
 
}
