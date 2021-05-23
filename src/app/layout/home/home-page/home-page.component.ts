import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // Variable para saber si se carga la data de forma correcta
  isDataOk = false

  // Variables para guardar los datos de cada sección
  home_intro: any;
  home_technology: any;
  home_house: any;
  home_sport: any;

  // Info para los header de secciones
  info_header_technology: any;
  info_header_house: any;
  info_header_sport: any;

  // Info para el hero header
  info_hero: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Se inicia la data
    // this.home_intro = home_intro_json;
    // this.home_technology = home_technology_json;
    // this.home_house = home_house_json;
    // this.home_sport = home_sport_json;

    this.http.get("assets/data/home/home_intro.json").subscribe((resp: any) =>{
      console.log(resp);
      this.home_intro = resp;
    })

    this.http.get("assets/data/home/home_technology.json").subscribe((resp: any) =>{
      console.log(resp);
      this.home_technology = resp;
    })

    this.http.get("assets/data/home/home_house.json").subscribe((resp: any) =>{
      console.log(resp);
      this.home_house = resp;
    })

    this.http.get("assets/data/home/home_sport.json").subscribe((resp: any) =>{
      console.log(resp);
      this.home_sport = resp;
    })
    
    // Objetos de info para los header de secciones
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

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/001.jpg',
    }

  }

}
