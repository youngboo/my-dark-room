import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="ui rasied segment ">
      <div class="ui two column doubling stackable grid container">
        <div class="column">
          <!-- 游戏主界面-->
          <div class="ui grid">
            <div class="three wide column">
              <div class="ui vertical fluid tabular menu">
                <a class="item {{active=='room'?'active':''}}" (click)="changeActive('room')" routerLink="/room">room</a>
                <a class="item {{active=='village'?'active':''}}" (click)="changeActive('village')" routerLink="/village">village</a>
                <a class="item {{active=='dusty'?'active':''}}" (click)="changeActive('dusty')" routerLink="/dusty">dusty</a>
              </div>
            </div>
            <div class="twelve wide stretched column">
              <div class="ui segment">
                <router-outlet></router-outlet>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <!-- 材料箱-->
          <h4 class="ui horizontal divider header">
            <i class="tag icon"></i>
            stores
          </h4>
          <table class="ui definition table">
            <tbody>
            <tr>
              <td class="two wide column">wood</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>6 ounces</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Yellowish</td>
            </tr>
            <tr>
              <td>Odor</td>
              <td>Not Much Usually</td>
            </tr>
            </tbody>
          </table>
          <h4 class="ui horizontal divider header">
            <i class="bar chart icon"></i>
            weapons
          </h4>
          <table class="ui definition table">
            <tbody>
            <tr>
              <td class="two wide column">Size</td>
              <td>1" x 2"</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>6 ounces</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Yellowish</td>
            </tr>
            <tr>
              <td>Odor</td>
              <td>Not Much Usually</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my dark room';
  active:string = 'room';

  changeActive(active:string):void{
    this.active = active;
  }
}
