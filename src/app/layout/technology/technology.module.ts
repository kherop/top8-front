import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TechnologyPageComponent
  ],
  exports: [
    TechnologyPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TechnologyModule { }
