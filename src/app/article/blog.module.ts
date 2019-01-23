import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../vguard/auth.guard';
import {DeactiveGuard} from '../vguard/deactive.guard';

import { BlogComponent } from './blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

import {ChildElementModule} from '../share-module/provider';
// import {AlertModule} from '../share-module/notification/alert.module';


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
        component: BlogCreateComponent,
        canDeactivate: [DeactiveGuard],
      },
      {
        path: 'detail/:id',
        component: BlogDetailComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BLOG_ROUTES),
    ChildElementModule,
    // AlertModule,
  ],
  declarations: [BlogComponent, BlogCreateComponent, BlogListComponent, BlogDetailComponent]
})
export class BlogModule { }
