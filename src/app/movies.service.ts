import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  private content = new BehaviorSubject<string>("");
public share = this.content.asObservable();
  movielist(){

  return  this.http.get("http://www.omdbapi.com/?s=can&y=2018&type=movie&apikey=9f4f767e")
   
  
}
movie(i){
  this.content.next(i);
  console.log(i)

  
}
}
