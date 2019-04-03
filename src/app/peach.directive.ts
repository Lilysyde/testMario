import { Directive, HostBinding, HostListener } from '@angular/core';

export  enum KEY_CODE{
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Directive({
  selector: '[appPeach]'
})
export class PeachDirective {

@HostBinding ('style.transform') mytransformation : any
  constructor() { }

@HostListener ('window:keyup', ['$event']) keyEvent (event: KeyboardEvent){
  
  if (event.keyCode === KEY_CODE.RIGHT_ARROW){

  this.mytransformation = "translateX(10px)"
  }
  if (event.keyCode === KEY_CODE.LEFT_ARROW){
this.mytransformation =  "translateX(-10px)"

  }
  
}
@HostListener ('window:key') mouseLeaveEvent (eventData: Event){
  
  this.mytransformation = 'translateX(0)'

}

}
