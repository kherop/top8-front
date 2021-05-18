import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SportsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SportsModule { }
