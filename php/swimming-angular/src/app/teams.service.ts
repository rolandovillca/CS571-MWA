import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './models/team-module';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private baseUrl = "http://localhost:3000/api/teams"

  constructor(private http: HttpClient) { }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + "/all");
    // const url = this.baseUrl + "/all";
    // return this.http.get(url).toPromise()
    //   .then(response => response as Team[])
    //   .catch(this._handleError);
  }

  public getTeamById(id: string): Observable<Team> {
    return this.http.get<Team>(this.baseUrl + "/" + id);
  }

  private _handleError(err: any): Promise<any> {
    console.log("Service Error", err);
    return Promise.reject(err.message || err);
  }

  public addTeam(data: any): Observable<Team> {
    return this.http.post<Team>(this.baseUrl + "/add", data);
  }

  public deleteTeamById(id: string): Observable<Team> {
    return this.http.delete<Team>(this.baseUrl + "/" + id);
  }

  public updateTeamById(id: string, data: any): Observable<Team> {
    return this.http.put<Team>(this.baseUrl + "/" + id, data);
  }

}

// export class Member {
//   #_id!: string;
//   #name!: string;
//   #age!: number;
//   #number_olympic_participation!: number;
//   constructor() { }

//   get _id() { return this.#_id; }
//   get name() { return this.#name; }
//   get age() { return this.#age; }
//   get number_olympic_participation() {
//     return this.#number_olympic_participation;
//   }

//   set name(name) { this.name = name; }
//   set age(age) { this.age = age; }
//   set number_olympic_participation(value) {
//     this.number_olympic_participation = value;
//   }
// }

// export class Team {
//   #_id!: string;
//   #name!: string;
//   #country!: number;
//   #creation_year!: number;
//   #creation_month!: number;
//   #creation_day!: number;
//   #members!: [Member];
//   constructor() { }

//   get _id() { return this.#_id; }
//   get name() { return this.#name; }
//   get country() { return this.#country; }
//   get creation_year() { return this.#creation_year; }
//   get creation_month() { return this.#creation_month; }
//   get creation_day() { return this.#creation_day; }
//   get members() { return this.#members; }

//   set name(value) { this.#name = value; }
//   set country(value) { this.#country = value; }
//   set creation_year(value) { this.#creation_year = value; }
//   set creation_month(value) { this.#creation_month = value; }
//   set creation_day(value) { this.#creation_day = value; }
//   set members(value) { this.members = value }
// }