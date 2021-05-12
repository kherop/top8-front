import { Component, OnInit } from '@angular/core';
import home_technology_json from '../../../data/home/home_technology.json';
import technology_mobile_json from '../../../data/technology/technology_mobile.json';
import technology_pc_json from '../../../data/technology/technology_pc.json';
import technology_gaming_json from '../../../data/technology/technology_gaming.json';
import technology_tv_audio_json from '../../../data/technology/technology_tv_audio.json';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  technology_intro: any;
  technology_mobile: any;
  technology_pc: any;
  technology_gaming: any;
  technology_tv_audio: any;

  // Info para los header de secciones
  info_header_mobile: any;
  info_header_pc: any;
  info_header_gaming: any;
  info_header_tv_audio: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    // Se inicia la data
    this.technology_intro = home_technology_json;
    this.technology_mobile = technology_mobile_json;
    this.technology_pc = technology_pc_json;
    this.technology_gaming = technology_gaming_json;
    this.technology_tv_audio = technology_tv_audio_json;

    // Objetos de info para los header de secciones
    this.info_header_mobile = {
      title: 'Móviles',
      img: '../../../../assets/images/tech_002.png',
      alt: 'Móviles'
    };

    this.info_header_pc = {
      title: 'Ordenadores',
      img: '../../../../assets/images/tech_002.png',
      alt: 'Ordenadores'
    };

    this.info_header_gaming = {
      title: 'Gaming',
      img: '../../../../assets/images/tech_002.png',
      alt: 'Gaming'
    };

    this.info_header_tv_audio = {
      title: 'TV y Audio',
      img: '../../../../assets/images/tech_002.png',
      alt: 'TV y Audio'
    };

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/006.jpg',
    }

  }

}
