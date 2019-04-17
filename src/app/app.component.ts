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
  constructor(public auth: AuthService, public router: Router) { 
  }

  ngOnInit() {
  }

  logout() {
    console.log("Logging out...");
    this.router.navigate(['/login']);
  }
}
