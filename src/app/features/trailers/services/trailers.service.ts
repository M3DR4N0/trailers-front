import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Trailer } from 'src/app/core/models/trailer';
import { GenericService } from 'src/app/core/services/generic.service';

@Injectable({ providedIn: 'root' })
export class TrailersService extends GenericService<Trailer> {

  constructor(public httpClient: HttpClient) { 
    super(httpClient, 'trailer')
    this.actionUrl = 'trailer';
  }

  search(title: string): Observable<Trailer[]>{
    return this.httpClient.get<Trailer[]>(`${this.actionUrl}?title=${title}`);
  }
}
