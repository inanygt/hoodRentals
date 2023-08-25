import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: any = [];
  private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(this.url + '/categories');
  }

  getCategoryData(categoryId: number): Observable<any> {
    return this.http.get(this.url + '/category/' + categoryId); // Adjust your API endpoint
  }
}
