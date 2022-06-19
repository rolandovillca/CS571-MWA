import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Register } from '../register/register.component';
import { UsersService } from '../users.service';

export class LoginToken {
    success: boolean = false;
    token: string = "";
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('loginForm')
    loginForm!: NgForm;
    credentials!: Register;
    done: boolean = false;

    constructor(
        private userService: UsersService,
        private _authService: AuthenticationService,
        private _router: Router) { }

    ngOnInit(): void {
        this.credentials = new Register();
        this.credentials.username = "";
        this.credentials.password = "";
    }

    get isLoggedIn() { return this._authService.isLoggedIn; }
    get name() { return this._authService.name; }

    logout() {
        this._authService.deleteToken();
        this._router.navigate([""]);
    }

    login(loginResponse: LoginToken) {
        this._authService.token = loginResponse.token;
        this._router.navigate(["/team"]);
    }

    onSubmit(loginForm: NgForm): void {
        let user: Register = new Register();
        if (!user.fillFromForm(loginForm)) {
            this.userService.login(user).subscribe({
                next: (loginResponse) => this.login(loginResponse),
                error: (err) => {
                    ;
                }
            })
        }
    }
}
