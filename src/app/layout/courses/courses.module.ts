import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
