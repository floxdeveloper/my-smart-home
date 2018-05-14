import { PanelComponent } from './../panel/panel.component';
import { Component, OnInit } from '@angular/core';
import { Thing } from '../entity/thing';
import { Action } from '../entity/action';
import { State } from '../entity/state';
import { PostParameter } from '../entity/post-parameter';

@Component({
  selector: 'app-grundriss-grid',
  templateUrl: './grundriss-grid.component.html',
  styleUrls: ['./grundriss-grid.component.css']
})
export class GrundrissGridComponent implements OnInit {
  things: Thing[][];

  constructor() {
    this.things = Array<Array<Thing>>();
    for (let i = 0; i < 8; i++) {
      this.things[i] = [];
    }
    const bettlicht = new Thing('Bettlicht', '../assets/images/bettlicht.png', new Action('Schalter', new PostParameter('rest/items/homematic_HM_ES_PMSw1_Pl_DN_R1_9d365d5c_NEQ0706282_1_STATE', 'ON', null)), [], new State('Licht', 'http://192.168.178.30:8080/rest/items/homematic_HM_ES_PMSw1_Pl_DN_R1_9d365d5c_NEQ0706282_1_STATE', '0'), []);
    this.things[5][1] = bettlicht;
    console.log(this.things[5][1]);
  }

  ngOnInit() {
  }

}
