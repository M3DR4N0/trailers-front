import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrailersService } from 'src/app/services/trailers.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private http: HttpClient, private contactoService: TrailersService) { }

  info = {
    nombre: null,
    tel: null,
    email: null,
    coment: null
  }

  sendMessage() {
    this.contactoService.send(this.info).subscribe(() => {
      alert('Enviado!');
    }, (error) => {
      alert('error!');
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
