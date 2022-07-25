import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }
  users() {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
