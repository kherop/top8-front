import { Component, OnInit } from '@angular/core';
import home_technology_json from '../../../data/home/home_sport.json'

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.scss']
})
export class SportsPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  sports_intro: any;

  // Info para los header de secciones
  // info_header_technology: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    this.sports_intro = home_technology_json;

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/014.jpg',
    }
  }

}
