import { PanelComponent } from './../panel/panel.component';
import { Component, OnInit } from '@angular/core';
import { Thing } from '../entity/thing';
import { Action } from '../entity/action';
import { State } from '../entity/state';

@Component({
  selector: 'app-grundriss-grid',
  templateUrl: './grundriss-grid.component.html',
  styleUrls: ['./grundriss-grid.component.css']
})
export class GrundrissGridComponent implements OnInit {
  panels: PanelComponent[][];

  constructor() {
    this.panels = Array<Array<PanelComponent>>();
    for (let i = 0; i < 8; i++) {
      this.panels[i] = [];
    }
    const bettlicht = new Thing('Bettlicht', '../assets/images/bettlicht.png', new Action('Schalter', 'http://192.168.178.30:8080/rest/items/homematic_HM_ES_PMSw1_Pl_DN_R1_9d365d5c_NEQ0706282_1_STATE'), [], new State('Licht', 'http://192.168.178.30:8080/rest/items/homematic_HM_ES_PMSw1_Pl_DN_R1_9d365d5c_NEQ0706282_1_STATE', '0'), []);
    this.panels[5][1] = new PanelComponent(bettlicht);
    console.log(this.panels[5][1]);
  }

  ngOnInit() {
  }

}
