import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: any = [];
  private url = 'http://localhost:8000/api';

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.url + '/items');
  }
}
