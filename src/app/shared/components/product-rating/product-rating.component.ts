import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() rating: number | undefined;
  @Input() link: any;
  rating_start: any;
  constructor() { }

  ngOnInit(): void {
    this.rating_start = this.getStars(this.rating)
  }

  getStars(rating: any) {

    // Redondeo de la puntuacion
    rating = Math.round(rating * 2) / 2;
    let output = [];
  
    // Se añaden las estrellas enteras
    for (var i = rating; i >= 1; i--)
      output.push('<i class="bi bi-star-fill text-primary"></i>');
  
    // Si es necesario incluimos la media estrella
    if (i == .5) output.push('<i class="bi bi-star-half text-primary"></i>');
  
    // Estrellas vacias
    for (let i = (5 - rating); i >= 1; i--)
      output.push('<i class="bi bi-star text-primary"></i></svg>');
  
    return output.join('');

  }

}