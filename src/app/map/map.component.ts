import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { MapTheme } from '../theme';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-map',
  providers:[MapService],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
map = []

  constructor(public MapService: MapService, public textures : MapTheme) {
    
  

   
    

  }
  getHeroes(): void {
    this.map = this.MapService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}


