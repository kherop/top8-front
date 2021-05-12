import { Component, OnInit } from '@angular/core';
import home_technology_json from '../../../data/home/home_house.json'

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.scss']
})
export class HousePageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  house_intro: any;

  // Info para los header de secciones
  // info_header_technology: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    this.house_intro = home_technology_json;

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/010.jpg',
    }
  }

}
