import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './layout/home/home-page/home-page.component';
import { Error404PageComponent } from './layout/error404/error404-page/error404-page.component';
import { TechnologyPageComponent } from './layout/technology/technology-page/technology-page.component';
import { HousePageComponent } from './layout/house/house-page/house-page.component';
import { SportsPageComponent } from './layout/sports/sports-page/sports-page.component';
import { CoursesPageComponent } from './layout/courses/courses-page/courses-page.component';
import { GamesPageComponent } from './layout/games/games-page/games-page.component';

const routes: Routes = [
  { path: '', component:  HomePageComponent },
  { path: 'home', component:  HomePageComponent },
  { path: 'tecnologia', component:  TechnologyPageComponent },
  { path: 'hogar', component:  HousePageComponent },
  { path: 'deportes', component:  SportsPageComponent },
  { path: 'cursos', component:  CoursesPageComponent },
  { path: 'videojuegos', component:  GamesPageComponent },
  { path: '**', component: Error404PageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
