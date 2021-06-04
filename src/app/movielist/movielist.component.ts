import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
import {moviesModel} from '../home/movies.model';
import {Router }  from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  private content = new BehaviorSubject<string>("");
public share = this.content.asObservable();
  movies=<any>[];
  i;
  constructor(public movieservice:MoviesService,private router: Router) { }

  ngOnInit(): void {
    this.movieservice.movielist()
    .subscribe((data)=>{
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies.Search[0])
    })
  }
  getmovies(){
    console.log(this.movies[0].Title)
  }
  movie(i){
     this.movieservice.movie(i)
   
    //  this.router.navigate(['movie'],{queryParams: {id: this.i}})

  }

  
  

}

