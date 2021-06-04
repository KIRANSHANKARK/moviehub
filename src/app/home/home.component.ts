import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
import {moviesModel} from './movies.model';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import {

  Router
} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loading= false;
movies:moviesModel[];
  constructor(public movieservice:MoviesService,private loaderService: LoaderService,private router: Router) { }

  ngOnInit(): void {

    this.movieservice.movielist()
    .subscribe((data)=>{
      setTimeout(() => {
        this.movies = JSON.parse(JSON.stringify(data));
        this.router.navigate(['movies'])
        console.log(this.movies)
      }, 3000);
    
      })
    }

  


}
