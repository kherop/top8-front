import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeroHeaderComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeroHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
