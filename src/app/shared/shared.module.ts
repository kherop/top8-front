import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeroHeaderComponent,
    ProductCardComponent,
    TitleHeaderComponent,
    ProductRatingComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeroHeaderComponent,
    ProductCardComponent,
    TitleHeaderComponent,
    ProductRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class SharedModule { }
