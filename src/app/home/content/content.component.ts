import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  post$: Observable<any>;

  constructor(private contentful: ContentfulService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const contentID = this.route.snapshot.paramMap.get('id');
    this.post$ = this.contentful.getContent(contentID);
  }

}
