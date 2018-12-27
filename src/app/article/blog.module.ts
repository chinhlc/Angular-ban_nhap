import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'list',
        component: BlogListComponent
      },
      {
        path: 'create',
        component: BlogCreateComponent
      },
      {
        path: 'detail/:id',
        component: BlogDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BLOG_ROUTES),
  ],
  declarations: [BlogComponent, BlogCreateComponent, BlogListComponent, BlogDetailComponent]
})
export class BlogModule { }
