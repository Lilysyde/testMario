import { Injectable } from '@angular/core';

const CIEL = 0
const TERRE = 1


@Injectable({
  providedIn: 'root'
})


export class MapTheme {


 public textures= {
  }
  
  constructor() {    
    this.textures[TERRE] = "assets/textures/mario.png"
   }
 getTexture(){
   return this.textures
 }
}


@Injectable({
  providedIn: 'root'
})
export class MapService {
  


  public map = [
    [TERRE, TERRE, TERRE, TERRE],
    [TERRE, TERRE, TERRE, TERRE]
  ]
  constructor() {


  }
getMap(): number[][]{
  return this.map
}
}

