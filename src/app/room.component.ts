import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {BasicData, AllDataService} from "../service/all-data-service";

export class Button{
  id:number;
  text:string;
  state:string;
  inOut:string;
}
@Component({
  selector: 'room',
  animations: [
    trigger('heroState', [
      state('inactive', style({

        transform: 'scale(1)'
      })),
      state('active',   style({

        transform: 'scale(1)'
      })),
      transition('inactive => active, active => inactive',
        [style({transform:'scale(1.2)'}),animate('500ms ease-out')])
    ]),
    trigger('flyInOut',[
      state("in",style({transform:"translateX(0)"})),
      transition("void=>*",[
        style({transform:"translateX(-100%)"}),animate(100)
      ]),
      transition("*=>void",[
        style({transform:"translateX(100%)"}),animate(100)
      ])
    ]),
    trigger("coolDown",[
      state("none",style({})),
      state("comeDown",style({width:"100%"})),
      state("outDown",style({width:"0%"})),
      transition("*=>outDown",[style({background:'#DDDDDD'}),animate(5000)])
    ])
  ],
  template:`
    <div class="ui three column grid">
        <div class="room ui basic button" [@heroState]="roomBtn.state" (click)="toggleState()">{{roomBtn.text}}
      <div class="coolDown" (@coolDown.start)="animationStarted($event)" (@coolDown.done)="animationDone($event)" [@coolDown]="coolDown"></div>
    </div>
        <div class="ui primary basic disabled button" *ngIf="roomBtn.inOut=='in'" [@flyInOut]='roomBtn.inOut' (click)="out()">{{roomBtn.text}}</div>
    </div>
    
    <div class="ui three column grid">
      <div class="row">
        <div class="column">
          <div *ngFor="let add of roomData">{{add.name}}</div>
        </div>
        <div class="column">
          <div>added</div>
          <div>added</div>
          <div>added</div>
          <div>added</div>
          <div>added</div>
        </div>
        <div class="column">
          <div>added</div>
          <div>added</div>
          <div>added</div>
          <div>added</div>
          <div>added</div>
        </div>
      </div>
    </div>
  `,
  styleUrls:['./app.component.css']
})
export class RoomComponent implements OnInit{
  roomData:BasicData[];

  constructor(private allDataService:AllDataService){}
  ngOnInit(): void {
    //this.outAfterTwoSeconds();
    //TODO 获取真实数据
    this.allDataService.getRoomData().then(roomData=>{
      this.roomData = roomData;
    });
  }
  coolDown:string = "comeDown";
  title:string = 'my dark room';
  roomBtn:Button = {
    id:1,
    text:"stoke fire",
    state:"active",
    inOut:"in"
  };
  toggleState():void{
    this.roomBtn.state == "active"?this.roomBtn.state="inactive":this.roomBtn.state="active";
    this.coolDown == "comeDown"?this.coolDown="outDown":this.coolDown="comeDown";
  }
  out():void{
    this.roomBtn.inOut = "out";
    console.log(this.roomBtn.inOut);
  }
  outAfterTwoSeconds():void{
    setTimeout(()=>this.roomBtn.inOut="out",3000);
  }
  //倒计时效果 点击点火按钮，判断
  /*
    倒计时效果 点击点火按钮，判断当前是否正在动画，如果正在动画，则不做任何
    if(animation is running){
      //do nothing
    }else{
      方案一：按钮增加一个随时间往左飘的背景动画即可。
      方案二：使用现成的进度条
    }


   */
  animationStarted($event:AnimationEvent):void{
    //this.roomBtn.state = "disabled";
  }
  animationDone($event:AnimationEvent):void{
    //this.roomBtn.state = "";
    this.coolDown = "comeDown";
  }
}
