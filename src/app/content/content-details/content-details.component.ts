import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  path = '../assets/markdown/'
  src;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params:ParamMap) => {
      this.src = this.path+params.get('id')+'.md';
   });
  }

}
