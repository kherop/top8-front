import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesPageComponent } from './games-page/games-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GamesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GamesModule { }
