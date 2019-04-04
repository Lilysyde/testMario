import { Directive, HostBinding, HostListener } from '@angular/core';

export  enum KEY_CODE{
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Directive({
  selector: '[appPeach]'
})
export class PeachDirective {
bouger :number =10
readonly: number =0
vertical:number=0
horizontal:number =0

@HostBinding ('style.transform') mytransformation : any
  constructor() { }

@HostListener ('window:keyup', ['$event']) keyEvent (event: KeyboardEvent){
  
  if (event.keyCode === KEY_CODE.RIGHT_ARROW){
    
this.horizontal+=this.bouger;

  }
  if (event.keyCode === KEY_CODE.LEFT_ARROW){
    
    this.horizontal-=this.bouger;
    
      }

  this.mytransformation = "translate("+this.horizontal + "px ,"+this.vertical +"px)";


}
}
