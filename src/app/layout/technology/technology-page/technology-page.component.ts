import { Component, OnInit } from '@angular/core';
import home_technology_json from '../../../data/home/home_technology.json'

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  technology_intro: any;

  // Info para los header de secciones
  // info_header_technology: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    this.technology_intro = home_technology_json;

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/006.jpg',
    }

  }

}
