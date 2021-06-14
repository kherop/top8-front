import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.scss']
})
export class HousePageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  house_intro: any;
  house_kitchen: any;
  house_health: any;
  house_furniture: any;
  house_lighting: any;

  // Info para los header de secciones
  info_header_kitchen: any;
  info_header_health: any;
  info_header_furniture: any;
  info_header_lighting: any;

  // Info para el hero header
  info_hero: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamadas http para solicitar la data
    this.http.get("assets/data/home_house.json").subscribe((resp: any) => {
      console.log(resp);
      this.house_intro = resp;
    })

    this.http.get("assets/data/house_kitchen.json").subscribe((resp: any) => {
      console.log(resp);
      this.house_kitchen = resp;
    })
    
    this.http.get("assets/data/house_health.json").subscribe((resp: any) => {
      console.log(resp);
      this.house_health = resp;
    })

    this.http.get("assets/data/house_furniture.json").subscribe((resp: any) => {
      console.log(resp);
      this.house_furniture = resp;
    })

    this.http.get("assets/data/house_lighting.json").subscribe((resp: any) => {
      console.log(resp);
      this.house_lighting = resp;
    })


    // Objetos de info para los header de secciones
    this.info_header_kitchen= {
      title: 'Cocina',
      img: '../../../../assets/images/house_003.png',
      alt: 'Cocina'
    };

    this.info_header_health = {
      title: 'Cuidados',
      img: '../../../../assets/images/house_008.png',
      alt: 'Cuidados'
    };

    this.info_header_furniture = {
      title: 'Muebles',
      img: '../../../../assets/images/house_007.png',
      alt: 'Muebles'
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
