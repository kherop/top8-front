import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  technology_intro: any;
  technology_mobile: any;
  technology_laptop: any;
  technology_earphone: any;
  technology_smartwatch: any;
  technology_pc: any;
  technology_gaming: any;
  technology_tv: any;
  technology_audio: any;

  // Info para los header de secciones
  info_header_mobile: any;
  info_header_laptop: any;
  info_header_earphone: any;
  info_header_smartwatch: any;
  info_header_pc: any;
  info_header_gaming: any;
  info_header_tv: any;
  info_header_audio: any;

  // Info para el hero header
  info_hero: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamadas http para solicitar la data
    this.http.get("assets/data/home_technology.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_intro = resp;
    })

    this.http.get("assets/data/technology_mobile.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_mobile = resp;
    })

    this.http.get("assets/data/technology_earphone.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_earphone = resp;
    })

    this.http.get("assets/data/technology_smartwatch.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_smartwatch = resp;
    })

    this.http.get("assets/data/technology_pc.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_pc = resp;
    })

    this.http.get("assets/data/technology_laptop.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_laptop = resp;
    })

    this.http.get("assets/data/technology_gaming.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_gaming = resp;
    })

    this.http.get("assets/data/technology_tv.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_tv = resp;
    })

    this.http.get("assets/data/technology_audio.json").subscribe((resp: any) => {
      console.log(resp);
      this.technology_audio = resp;
    })

    // Objetos de info para los header de secciones
    this.info_header_mobile = {
      title: 'Móviles',
      img: '../../../../assets/images/tech_004.png',
      alt: 'Móviles'
    };

    this.info_header_earphone = {
      title: 'Auriculares',
      img: '../../../../assets/images/tech_004.png',
      alt: 'Móviles'
    };

    this.info_header_smartwatch = {
      title: 'Smartwatch',
      img: '../../../../assets/images/tech_004.png',
      alt: 'Smartwatch'
    };

    this.info_header_pc = {
      title: 'PC',
      img: '../../../../assets/images/tech_006.png',
      alt: 'PC'
    };

    this.info_header_laptop = {
      title: 'Laptop',
      img: '../../../../assets/images/tech_006.png',
      alt: 'Laptop'
    };

    this.info_header_gaming = {
      title: 'Gaming',
      img: '../../../../assets/images/tech_005.png',
      alt: 'Gaming'
    };

    this.info_header_tv = {
      title: 'TV',
      img: '../../../../assets/images/tech_007.png',
      alt: 'TV'
    };

    this.info_header_audio = {
      title: 'Audio',
      img: '../../../../assets/images/tech_007.png',
      alt: 'Audio'
    };

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/006.jpg',
    }

  }

}
