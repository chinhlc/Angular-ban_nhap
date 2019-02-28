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
import {AllElementModule} from '../share-module/provider/custom-element/custom-el.module';
// import {AlertModule} from '../share-module/notification/alert.module';

import {StoreModule} from '@ngrx/store';
import {customerReducer} from '../redux/customer.reducer';


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
    StoreModule.forFeature('storeReduxCustomer', customerReducer),
    ChildElementModule,
    // AlertModule,
    AllElementModule
  ],
  declarations: [BlogComponent, BlogCreateComponent, BlogListComponent, BlogDetailComponent]
})
export class BlogModule { }
