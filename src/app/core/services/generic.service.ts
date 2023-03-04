import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class GenericService<T> {

  constructor(public httpClient: HttpClient, public actionUrl: string) { }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.actionUrl);
  }

  getById(id: unknown): Observable<T> {
    return this.httpClient.get<T>(`${this.actionUrl}/${id}`);
  }

  insert(trailer: T): Observable<T> {
    return this.httpClient.post<T>(this.actionUrl, trailer);
  }

  update(id: unknown, trailer: T): Observable<T> {
    return this.httpClient.put<T>(`${this.actionUrl}/${id}`, trailer);
  }

  delete(id: unknown): Observable<unknown> {
    return this.httpClient.delete<unknown>(`${this.actionUrl}/${id}`);
  }
}
