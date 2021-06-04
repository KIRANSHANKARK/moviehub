import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{HomeComponent } from './home/home.component';
import{MovielistComponent} from './movielist/movielist.component';
import{MovieComponent} from './movie/movie.component';
import{Home2Component} from './home2/home2.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'movies',component:MovielistComponent},
{path:'home2',component:Home2Component},
{path:'movie/:id',component:MovieComponent}

];
routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
