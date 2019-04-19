import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { fade, staggerList } from '../animations';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  animations: [fade, staggerList]
})
export class ContentListComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private afs: FirebaseService) { }

  ngOnInit() {
    this.posts$ = this.afs.getContents().snapshotChanges().pipe(
      map(actions => actions.map(
        a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

}
