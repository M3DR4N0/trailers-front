import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trailer } from '../interfaces/trailer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {

  ENDPOINT: string;

  constructor(private httpClient: HttpClient) { 
    this.ENDPOINT = environment.API_ENDPOINT;
  }

  get(){
    return this.httpClient.get(this.ENDPOINT + '/Trailer');
  }

  getById(id){
    return this.httpClient.get(this.ENDPOINT + '/Trailer/' + id);
  }

  save(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.ENDPOINT + '/Trailer', trailer, { headers: Headers});
  }

  put(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.ENDPOINT + '/Trailer/' + trailer.id, trailer, { headers: Headers});
  }

  delete(id){
    return this.httpClient.delete(this.ENDPOINT + '/Trailer/' + id);
  }
}
