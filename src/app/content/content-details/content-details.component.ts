import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { tap, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { fade, routing } from '../animations';

//State from server
const POSTS = makeStateKey<any>('posts');

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
  animations: [fade, routing]
})


export class ContentDetailsComponent implements OnInit {
  path = '../assets/markdown/'
  posts$: Observable<any>;
  src: Observable<any>;
  constructor(public route: ActivatedRoute, public afs: AngularFirestore, private state: TransferState) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.posts$ = this.getPosts(id);
  }

  getPosts(id: string) {
    const exists = this.state.get(POSTS, {} as any);
    return this.afs.collection('posts').doc(id).valueChanges()
    .pipe(
      tap(list => {
        this.state.set(POSTS, list);
      }),
      startWith(exists)
    )
  }


}
