import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<User[]>{
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    return this.http.get<User[]>(this.baseUrl + "/users");
  }

  // public getUsers(): Promise<User[]> {
  //   const url = this.baseUrl + "/users"
  //   return this.http.get(url).toPromise()
  //     .then(response => response as User[])
  //     .catch(this._handleError);
  // }

  // private _handleError(err: any): Promise<any> {
  //   console.log("Service Error", err);
  //   return Promise.reject(err.message || err);
  // }
}

export class User {
  #id!: string;
  #name!: string;
  #username!: string;
  #email!: string;
  #phone!: string;
  #website!: string;
  constructor(id:string, name:string,username:string,email:string,phone:string,website:string){
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#email = email;
    this.#phone = phone;
    this.#website = website;
  }
  get id() { return this.#id }
  get name() { return this.#name }
  get username() { return this.#username }
  get phone() { return this.#phone }
  get website() { return this.#website }
  get email() { return this.#email }
}