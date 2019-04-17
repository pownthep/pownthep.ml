import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getPosts()
      .then(posts => this.posts = posts);
  }

}
