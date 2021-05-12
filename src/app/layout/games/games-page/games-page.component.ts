import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  games_intro: any;

  // Info para los header de secciones
  // info_header_technology: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    //this.games_intro = home_technology_json;

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/018.jpg',
    }
  }

}
