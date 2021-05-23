import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamadas http para solicitar la data
    this.http.get("assets/data/home/home_sport.json").subscribe((resp: any) => {
      console.log(resp);
      this.sports_intro = resp;
    })

    this.http.get("assets/data/sports/sports_clothing.json").subscribe((resp: any) => {
      console.log(resp);
      this.sports_clothing = resp;
    })

    this.http.get("assets/data/sports/sports_outdoors.json").subscribe((resp: any) => {
      console.log(resp);
      this.sports_outdoors = resp;
    })

    this.http.get("assets/data/sports/sports_running.json").subscribe((resp: any) => {
      console.log(resp);
      this.sports_running = resp;
    })

    this.http.get("assets/data/sports/sports_scooters.json").subscribe((resp: any) => {
      console.log(resp);
      this.sports_scooters = resp;
    })

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
