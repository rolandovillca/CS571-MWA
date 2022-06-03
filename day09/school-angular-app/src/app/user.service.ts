import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "";

  constructor(private http:HttpClient) { }

  public getUsers() {
    const url: string= this.baseUrl + "games";
  }
}
