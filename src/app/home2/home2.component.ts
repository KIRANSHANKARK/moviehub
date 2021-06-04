import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
import {moviesModel} from '../home/movies.model';
import {Router,ActivatedRoute }  from '@angular/router';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(public movieservice:MoviesService,private router: ActivatedRoute,private router2:Router) { }
  movies:moviesModel[];
  id

  ngOnInit(): void {
    this.movieservice.share.subscribe(id => this.id =id);
    console.log(this.id)
    this.movieservice.movielist()
    .subscribe((data)=>{
      setTimeout(() => {
        this.movies = JSON.parse(JSON.stringify(data));
        this.router2.navigate(['movie/this.id'])
        console.log(this.movies)
      }, 3000);
    
      })
}
}
