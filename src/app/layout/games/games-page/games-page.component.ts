import { Component, OnInit } from '@angular/core';
import games_top_json from '../../../data/games/games_top.json';
import games_action_json from '../../../data/games/games_action.json';
import games_adventures_json from '../../../data/games/games_adventures.json';
import games_sports_json from '../../../data/games/games_sports.json';
import games_strategy_json from '../../../data/games/games_strategy.json';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  games_top: any;
  games_action: any;
  games_adventure: any;
  games_sports: any;
  games_strategy: any;

  // Info para los header de secciones
  info_header_action: any;
  info_header_adventure: any;
  info_header_sports: any;
  info_header_strategy: any;

  // Info para el hero header
  info_hero: any;

  constructor() { }

  ngOnInit(): void {
    // Se inicia la data
    this.games_top = games_top_json;
    this.games_action = games_action_json;
    this.games_adventure = games_adventures_json;
    this.games_sports = games_sports_json;
    this.games_strategy = games_strategy_json;

    // Objetos de info para los header de secciones
    this.info_header_action = {
      title: 'Acción',
      img: '../../../../assets/images/games_001.png',
      alt: 'Acción'
    };

    this.info_header_adventure = {
      title: 'Aventuras',
      img: '../../../../assets/images/games_003.png',
      alt: 'Aventuras'
    };

    this.info_header_sports = {
      title: 'Deportes',
      img: '../../../../assets/images/games_005.png',
      alt: 'Deportes'
    };

    this.info_header_strategy = {
      title: 'Estrategia',
      img: '../../../../assets/images/games_004.png',
      alt: 'Estrategia'
    };

    // Objeto de info para el hero header
    this.info_hero = {
      img: '../../../../assets/images/018.jpg',
    }
  }

}
