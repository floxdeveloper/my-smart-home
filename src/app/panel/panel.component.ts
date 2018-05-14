import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../entity/thing';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() thing: Thing;

  constructor() { }

  ngOnInit() {
  }

  actionClick() {
    this.thing.runPrimaryAction();
  }

}
