import { Component, OnInit } from '@angular/core';
import home_intro_json from '../../../data/home/home_intro.json'
import home_technology_json from '../../../data/home/home_technology.json'
import home_house_json from '../../../data/home/home_house.json'
import home_sport_json from '../../../data/home/home_sport.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  home_intro: any;
  home_technology: any;
  home_house: any;
  home_sport: any;

  // Info para los header de secciones
  info_header_technology: any;
  info_header_house: any;
  info_header_sport: any;

  constructor() { }

  ngOnInit(): void {
    this.home_intro = home_intro_json;
    this.home_technology = home_technology_json;
    this.home_house = home_house_json;
    this.home_sport = home_sport_json;
    
    this.info_header_technology = {
      title: 'Tecnología',
      img: '../../../../assets/images/tech_002.png',
      alt: 'Tecnología'
    };

    this.info_header_house = {
      title: 'Hogar',
      img: '../../../../assets/images/house_002.png',
      alt: 'Hogar'
    };

    this.info_header_sport = {
      title: 'Deportes',
      img: '../../../../assets/images/sport_001.png',
      alt: 'Deporte'
    };

  }

}
