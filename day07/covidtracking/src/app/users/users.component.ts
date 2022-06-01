import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:User[] = [];
  
  constructor() {
    this.setUsers();
   }

  ngOnInit(): void {
    setTimeout(() => this.getUsers(20), 2000);
  }

  setUsers(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(res => res.forEach((user: any) => {
      this.users.push(user);
    }));
  }

  getUsers(num: number): void {
    for(let i=0; i<num; i++) {
      console.log(this.users[i]);
    }
  }
}

class User {
  #id!: string;
  #name!: string;
  #username!: string;
  #phone!: string;
  #website!: string;
  constructor(id:string, name:string, username:string, phone:string, website:string){
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#phone = phone;
    this.#website = website;
  }
  get id() { return this.#id; }
  get name() { return this.#name; }
  get username() { return this.#username; }
  get phone() { return this.#phone; }
  get website() { return this.#website; }
}