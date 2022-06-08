import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private baseUrl = "http://localhost:3000/api/teams"

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + "/all");
  }

  getTeamById(id: string): Observable<Team> {
    return this.http.get<Team>(this.baseUrl + "/" + id);
  }
}

export class Member {
  #_id!: string;
  #name!: string;
  #age!: number;
  #number_olympic_participation!: number;
  constructor() { }

  get _id() { return this.#_id;}
  get name() { return this.#name;}
  get age() { return this.#age;}
}

export class Team {
  #_id!: string;
  #name!: string;
  #country!: number;
  #creation_year!: number;
  #creation_month!: number;
  #creation_day!: number;
  #members!: [Member];
  constructor() { }

  get _id() { return this.#_id; }
  get name() { return this.#name; }
  get country() { return this.#country; }
  get creation_year() { return this.#creation_year; }
  get creation_month() { return this.#creation_month; }
  get creation_day() { return this.#creation_day; }
  get members() { return this.#members; }
}