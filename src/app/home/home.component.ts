import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { fade } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: fade
})
export class HomeComponent implements OnInit {
  public clicked = false;
  public text1: string = "console.log('Click me!')";
  public text2: string = "Idiot";
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.clicked = !this.clicked;
  }

}
