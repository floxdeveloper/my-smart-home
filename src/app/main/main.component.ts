import { Component, OnInit } from '@angular/core';
import { Thing } from '../entity/thing';
import { Action } from '../entity/action';
import { State } from '../entity/state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'My Smart Home';
  constructor() {}

  ngOnInit() {
  }

}
