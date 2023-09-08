import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: any = [];
  private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private subCategorySubject = new BehaviorSubject<any>(null);

  getCategories(): Observable<any> {
    return this.http.get(this.url + '/categories');
  }

  getCategoryData(categoryId: number): Observable<any> {
    return this.http.get(this.url + '/category/' + categoryId); // Adjust your API endpoint
  }

  setSubCategory(subCategoryInfo: any) {
    this.subCategorySubject.next(subCategoryInfo);
  }

  getSubCategory(): Observable<any> {
    return this.subCategorySubject.asObservable();
  }
}
