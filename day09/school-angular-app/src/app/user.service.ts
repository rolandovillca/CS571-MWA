import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + "/users");
  }
}
