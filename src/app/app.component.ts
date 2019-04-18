import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  meme = 'https://memegenerator.net/img/instances/58602367/this-is-a-mothafucking-placeholder.jpg';
  alt = 'Meme of the day';
  message:string;
  markdown = "### Hello world";
  constructor(public auth: AuthService, public router: Router) { 
  }

  ngOnInit() {
    this.auth.currentMessage.subscribe(message => this.message = message);
    this.auth.changeMessage('home');
  }

  logout() {
    console.log("Logging out...");
    this.router.navigate(['/login']);
  }
}
