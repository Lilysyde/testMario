import { Injectable } from '@angular/core';

const CIEL = 0
const TERRE = 1






export class MapTheme {


 public textures= {
    TERRE : "mario/animation_course.png"
  }
  
  constructor() {    
    
   }
   
}


@Injectable({
  providedIn: 'root'
})
export class MapService {
 
  public map = [
    [TERRE, CIEL, CIEL, TERRE],
    [TERRE, TERRE, TERRE, TERRE]
  ]
  constructor() {


  }
getHeroes(): number[][]{
  return this.map
}
}

