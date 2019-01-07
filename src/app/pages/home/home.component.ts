import { Component, OnInit } from '@angular/core';

import {UserService} from '../../share-module/dependency-injection/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
