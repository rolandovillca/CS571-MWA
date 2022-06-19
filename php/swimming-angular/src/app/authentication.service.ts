import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    #isLoggedIn: boolean = false;

    constructor(private _jwtService: JwtHelperService) { }

    get isLoggedIn() { return this.#isLoggedIn; }
    set isLoggedIn(value) { this.#isLoggedIn = value; }

    set token(token: string) {
        localStorage.setItem("myToken", token);
    }

    get token() {
        return localStorage.getItem("myToken") as string;
    }

    get name() {
        let name: string = "unknown";
        if (this.token) {
            name = this._jwtService.decodeToken(this.token).name as string;;
        }
        return name;
    }

    get userData() {
        return this._jwtService.decodeToken(this.token);
    }

    deleteToken() {
        localStorage.clear();
        this.isLoggedIn = false;
    }
}
