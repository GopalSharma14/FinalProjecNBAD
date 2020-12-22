import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataPath = 'http://localhost:3000/expenses/' + localStorage.getItem("currentUser");

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(this.dataPath);
  }}
