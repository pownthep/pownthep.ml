import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable } from 'rxjs';

const POSTS = makeStateKey<any>('posts');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  meme = 'https://memegenerator.net/img/instances/58602367/this-is-a-mothafucking-placeholder.jpg';
  alt = 'Meme of the day';
  markdown = "### Hello world";
  posts$: Observable<any>;
  constructor(public auth: AuthService, public router: Router, public afs: AngularFirestore, public http: HttpClient,private state: TransferState) { 
    console.log();
  }

  ngOnInit() {
    
  }

  logout() {
    console.log("Logging out...");
    this.router.navigate(['/login']);
  }
}
