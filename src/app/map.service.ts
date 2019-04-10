import { Injectable } from '@angular/core';

const VI = 0
const T1 = 1
const T2 = 2
const T3 = 3
const D1 = 4
const D2 = 5
const CG = 6
const CD = 7
const T4 = 8



@Injectable({
  providedIn: 'root'
})


export class MapTheme {


 public textures= {
  }
  
  constructor() {    
    this.textures[VI] = "assets/textures/vide.png" // Texture representant le vide //

    this.textures[T1] = "assets/textures/bloc_pierre.png" // bloc pierre coin gauche //
    this.textures[T2] = "assets/textures/bloc_pierre2.png" //bloc pierre classique principal //
    this.textures[T3] = "assets/textures/bloc_pierre3.png" // bloc pierre avec "ovale" au milieu //
    this.textures[T4] = "assets/textures/bloc_pierre_coin_droit.png"
    this.textures[D1] = "assets/textures/bloc_noire.png" // bloc noire sombre dessous decor //
    this.textures[D2] = "assets/textures/bloc_noire_pierre.png" // bloc noire sombre avec pierre //
   
    
    this.textures[CG] = "assets/textures/colonne_gauche.png" // bloc de pierre colonne gauche //
    this.textures[CD] = "assets/textures/colonne_droite.png" // bloc de pierre colonne droite //
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
    [VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI ,VI],
    [T1, T3, T4 ,VI ,VI ,T1, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T4, VI, VI, T1, T3, T3, T3 ,T3 ,T3 ,T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3],
    [CG, D1, CD ,VI ,VI ,CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, CD, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1],
    [CG, D1, CD ,VI ,VI ,CG, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1],
    [CG, D1, CD ,VI ,VI ,CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1],
    [CG, D1, CD, VI, VI, CG, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, CD, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1],
    
  ]
  constructor() {


  }
getMap(): number[][]{
  return this.map
}
}

