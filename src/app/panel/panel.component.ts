import { Component, OnInit } from '@angular/core';
import { Thing } from '../entity/thing';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  thing: Thing;

  constructor(thing: Thing) {
    this.thing = thing;
   }

  ngOnInit() {
  }

}
