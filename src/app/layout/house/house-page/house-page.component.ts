import { Component, OnInit } from '@angular/core';
import home_sport_json from '../../../data/home/home_house.json';
import house_appliances_json from '../../../data/house/house_appliances.json';
import house_health_json from '../../../data/house/house_health.json';
import house_home_kitchen_json from '../../../data/house/house_home _kitchen.json';
import house_lighting_json from '../../../data/house/house_lighting.json';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.scss']
})
export class HousePageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  house_intro: any;
  house_appliances: any;
  house_health: any;
  house_home_kitchen: any;
  house_lighting: any;

  // Info para los header de secciones
  info_header_appliances: any;
  info_header_health: any;
  info_header_home_kitchen: any;
  info_header_lighting: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    // Se inicializa la data
    this.house_intro = home_sport_json;
    this.house_appliances = house_appliances_json;
    this.house_health = house_health_json;
    this.house_home_kitchen = house_home_kitchen_json;
    this.house_lighting = house_lighting_json;

    // Objetos de info para los header de secciones
    this.info_header_appliances = {
      title: 'Electrodomesticos',
      img: '../../../../assets/images/house_004.png',
      alt: 'Electrodomesticos'
    };

    this.info_header_health = {
      title: 'Cuidados',
      img: '../../../../assets/images/house_006.png',
      alt: 'Cuidados'
    };

    this.info_header_home_kitchen = {
      title: 'Cocina',
      img: '../../../../assets/images/house_003.png',
      alt: 'Cocina'
    };

    this.info_header_lighting = {
      title: 'Iluminación',
      img: '../../../../assets/images/house_005.png',
      alt: 'Iluminación'
    };

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/010.jpg',
    }
  }

}
