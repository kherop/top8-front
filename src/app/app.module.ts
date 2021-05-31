import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './layout/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechnologyModule } from './layout/technology/technology.module';
import { SportsModule } from './layout/sports/sports.module';
import { HouseModule } from './layout/house/house.module';
import { CoursesModule } from './layout/courses/courses.module';
import { GamesModule } from './layout/games/games.module';
import { LegalModule } from './layout/legal/legal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    TechnologyModule,
    HomeModule,
    SportsModule,
    HouseModule,
    CoursesModule,
    GamesModule,
    LegalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
