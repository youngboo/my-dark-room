import { Component } from '@angular/core';

@Component({
  selector: 'village',
  template:`
    <div class="ui two column grid">
      <div class="row">
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
  `
})
export class VillageComponent {
  title = 'village';
  isTrue:boolean = true;
}
