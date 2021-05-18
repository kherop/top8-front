import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousePageComponent } from './house-page/house-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HousePageComponent
  ],
  exports: [
    HousePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HouseModule { }
