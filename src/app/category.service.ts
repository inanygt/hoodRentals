import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: any = [];
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private subCategorySubject = new BehaviorSubject<any>(null);

  // Get all categories
  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl + '/categories');
  }

  getItemsFromCat(categoryId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/items/cat/' + categoryId);
  }

  // category with subcategories
  getCategoryData(categoryId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/categorywithsub/' + categoryId);
  }

  getSubCategoryData(subCategoryId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/subcategorywithsub/' + subCategoryId);
  }

  getSubSubCategories(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/subcategorywithsub/${id}`);
  }
}
