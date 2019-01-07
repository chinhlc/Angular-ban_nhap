import { Component, OnInit } from '@angular/core';

import {UserService} from '../share-module/dependency-injection/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
