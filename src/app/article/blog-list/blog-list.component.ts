import { Component, OnInit } from '@angular/core';

import {IBlog} from '../../type-data/type-blog';
import {BlogService} from '../../type-data/data-service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogList: IBlog[] = [];

  constructor(
    private blogSV: BlogService,
  ) {}

  ngOnInit() {
    this.blogSV.getBlogList().subscribe(ps => this.blogList = ps);
  }
}
