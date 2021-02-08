import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trailer } from '../interfaces/trailer';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  API_ENDPOINT = 'https://localhost:5001/api';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/Trailer');
  }

  getUser(){
    return this.httpClient.get(this.API_ENDPOINT + '/login');
  }

  putUser(user: Login){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/login/' + user.id, user, { headers: Headers});
  }

  save(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/Trailer', trailer, { headers: Headers});
  }

  send(contacto){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/contacto', contacto, { headers: Headers});
  }

  put(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/Trailer/' + trailer.id, trailer, { headers: Headers});
  }

  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/Trailer/' + id);
  }
}
