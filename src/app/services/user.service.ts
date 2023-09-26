import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  apiUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/item/' + id + '/user');
  }

  ngOnInit(): void {}
}
