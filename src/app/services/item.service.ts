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

  // CRUD operations
  // addItem(itemData: any) {
  //   return this.http.post(this.url, itemData);
  // }

  // Get items
  getItems(): Observable<any> {
    return this.http.get(this.url + '/items');
  }

  getCatItem(catId: number): Observable<any> {
    return this.http.get(this.url + '/items/cat/' + catId);
  }

  getSubItems(subCatId: number): Observable<any> {
    return this.http.get(this.url + '/items/subcat/' + subCatId);
  }

  getSubSubItems(subsubCatId: number): Observable<any> {
    return this.http.get(this.url + '/items/subsubcat/' + subsubCatId);
  }
}
