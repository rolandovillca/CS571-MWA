import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}

export class User {
  #id!: string;
  #name!: string;
  #username!: string;
  #email!: string;
}