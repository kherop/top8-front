import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LegalPageComponent
  ],
  exports: [
    LegalPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LegalModule { }
