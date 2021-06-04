import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute }  from '@angular/router';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie 
id
m

  constructor(private router: ActivatedRoute,private router2:Router,private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.movieservice.share.subscribe(id => this.id =id);
    console.log(this.id)

    this.movieservice.movielist()
    .subscribe((data)=>{
      this.movie = JSON.parse(JSON.stringify(data));
      console.log(  this.movie.Search)
      for(var i=0;i<this.movie.Search.length;i++){
        if(this.movie.Search[i].imdbID == this.id){
          console.log(this.movie.Search[i])
          this.m = this.movie.Search[i]

        
        }
            }
  
    })
 
  }



  }

