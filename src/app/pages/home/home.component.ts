import { Component, OnInit } from '@angular/core';

import {UserService} from '../../share-module/dependency-injection/user.service';
import {NumberHelper} from '../../share-module/helper/number-helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  round = 20.0566;
  isnumber: boolean;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.round  = NumberHelper.round(this.round, 3);
    this.isnumber  = NumberHelper.integer(1805.66);
  }

}
