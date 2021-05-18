import { Component, OnInit } from '@angular/core';
import home_sport_json from '../../../data/home/home_sport.json';
import sports_clothing_json from '../../../data/sports/sports_clothing.json';
import sports_outdoors_json from '../../../data/sports/sports_outdoors.json';
import sports_running_json from '../../../data/sports/sports_running.json';
import sports_scooters_json from '../../../data/sports/sports_scooters.json';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.scss']
})
export class SportsPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  sports_intro: any;
  sports_clothing: any;
  sports_outdoors: any;
  sports_running: any;
  sports_scooters: any;

  // Info para los header de secciones
  info_header_clothing: any;
  info_header_outdoors: any;
  info_header_running: any;
  info_header_scooters: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    // Se inicia la data
    this.sports_intro = home_sport_json;
    this.sports_clothing = sports_clothing_json;
    this.sports_outdoors = sports_outdoors_json;
    this.sports_running = sports_running_json;
    this.sports_scooters = sports_scooters_json;

    // Objetos de info para los header de secciones
    this.info_header_clothing = {
      title: 'Ropa',
      img: '../../../../assets/images/sport_003.png',
      alt: 'Ropa'
    };

    this.info_header_outdoors = {
      title: 'Acampada',
      img: '../../../../assets/images/sport_005.png',
      alt: 'Acampada'
    };

    this.info_header_running = {
      title: 'Running',
      img: '../../../../assets/images/sport_004.png',
      alt: 'Running'
    };

    this.info_header_scooters = {
      title: 'Movilidad',
      img: '../../../../assets/images/sport_006.png',
      alt: 'Movilidad'
    };

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/014.jpg',
    }
  }

}
