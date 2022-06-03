import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  private baseUrl:string = "localhost:3000/api";
  
  constructor(private http:HttpClient) { }

  public getAll():Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl+'/games')
  }
}
