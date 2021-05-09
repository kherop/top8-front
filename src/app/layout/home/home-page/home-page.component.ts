import { Component, OnInit } from '@angular/core';
import home_intro_json from '../../../data/home/home_intro.json'
import home_technology_json from '../../../data/home/home_technology.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // Variables para guardar los datos de cada sección
  home_intro: any;
  home_technology: any;

  constructor() { }

  ngOnInit(): void {
    this.home_intro = home_intro_json;
    this.home_technology = home_technology_json;
  }

}
