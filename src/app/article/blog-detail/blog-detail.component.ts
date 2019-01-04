import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, map } from 'rxjs/operators';

import {IBlog} from '../../type-data/type-blog';
import {BlogService} from '../../type-data/data-service/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  BlogItem: IBlog;

  // id: string;

  constructor(
    private blogSV: BlogService,
    private route: ActivatedRoute) {
    // route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.productService.findBlogById(id).subscribe(
    //     product => this.product = product
    //   );
    // });
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.blogSV.findBlogById(id))
    ).subscribe(dt => this.BlogItem = dt);
    // const paramMap = this.route.snapshot.paramMap;
    // const id = paramMap.get('id');
    // this.productService.findBlogById(id).subscribe(product => this.product = product);
  }

}
