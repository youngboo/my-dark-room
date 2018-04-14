import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'village',
  animations:[trigger("coolDown",[
    state("none",style({})),
    state("comeDown",style({width:"100%"})),
    state("outDown",style({width:"0%"})),
    transition("*=>outDown",[style({background:'#DDDDDD'}),animate(5000)])
  ])],
  template:`
    <div class="ui two column grid">
      <div class="row">
        <div class="column">
          <div class="room ui basic button" (click)="gutterWood()">{{btnText}}
            <div class="coolDown" (@coolDown.start)="animationStarted($event)" (@coolDown.done)="animationDone($event)" [@coolDown]="coolDown"></div>
          </div>
        </div>
        <div class="column">
        </div>
      </div>
    </div>
  `,
  styleUrls:['../../../app/app.component.css']
})
export class VillageComponent {
  title = 'village';
  btnText = "gutter wood";
  coolDown:string = "comeDown";
  gutterWood():void{
    this.coolDown == "comeDown"?this.coolDown="outDown":this.coolDown="comeDown";
    this.btnText = "gutting wood";
  }
  animationStarted($event:AnimationEvent):void{
    console.log("animation start")
  }
  animationDone($event:AnimationEvent):void {
    console.log("animation end")
    //this.coolDown = "comeDown";
  }
}
