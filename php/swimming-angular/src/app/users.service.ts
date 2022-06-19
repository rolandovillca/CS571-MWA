import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginToken } from './login/login.component';
import { Register } from './register/register.component';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl = "http://localhost:3000/api/users"

    constructor(private http: HttpClient) { }

    public registerUser(user: Register): Observable<Register> {
        const url: string = this.baseUrl + "/all"
        return this.http.post<Register>(url, user);
    }

    public login(user: Register): Observable<LoginToken> {
        const url: string = this.baseUrl + "/login";
        return this.http.post<LoginToken>(url, user);
    }
}
