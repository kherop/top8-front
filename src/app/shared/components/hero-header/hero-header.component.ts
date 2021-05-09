import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
