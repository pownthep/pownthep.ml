import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Entry<any>[] = [];

  constructor() { }

  ngOnInit() {
  }

}
