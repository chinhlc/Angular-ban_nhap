import { Component } from '@angular/core';

import {AuthService} from './vguard/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isHighlight = false;

  constructor(private authService: AuthService) { }

  tooglelogin() {
    this.isHighlight = !this.isHighlight;

    if (this.isHighlight)
      this.authService.login();
    else
      this.authService.logout();
  }
}
