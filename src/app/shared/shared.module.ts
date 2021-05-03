import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { ListEightComponent } from './components/list-eight/list-eight.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeroHeaderComponent,
    ListEightComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeroHeaderComponent,
    ListEightComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
