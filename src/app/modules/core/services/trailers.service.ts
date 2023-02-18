import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trailer } from '../../shared/models/trailer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HomeModule } from '../../home/home.module';
import { SharedModule } from '../../shared/shared.module';

@Injectable()
export class TrailersService {

  readonly ENDPOINT: string;

  constructor(private httpClient: HttpClient) { 
    this.ENDPOINT = environment.API_ENDPOINT;
  }

  get(): Observable<Trailer[]> {
    return this.httpClient.get<Trailer[]>(this.ENDPOINT + '/trailer');
  }

  getById(id){
    return this.httpClient.get(this.ENDPOINT + '/trailer/' + id);
  }

  save(trailer: Trailer): Observable<Trailer>{
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Trailer>(this.ENDPOINT + '/trailer', trailer, { headers: Headers});
  }

  put(trailer: Trailer){
    const Headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.ENDPOINT + '/trailer/' + trailer.id, trailer, { headers: Headers});
  }

  delete(id){
    return this.httpClient.delete(this.ENDPOINT + '/trailer/' + id);
  }
}
