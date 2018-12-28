import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';

import {ActivateGlobalRouter} from '../../services/activate-router';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent,
    canActivate: [ActivateGlobalRouter]
  }, {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [ActivateGlobalRouter]
  }, {
    path: 'home',
    component: HomeComponent
  }
];

// Tốt nhất ta cho phần register, login vào thành 1 phần con của auth

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ ActivateGlobalRouter ]

  // Đã khai báo trong file index nên không cần khái báo lại
  // declarations: [
  //   HomeComponent,
  //   UserRegisterComponent,
  //   UserLoginComponent,
  // ]
})
export class XrouterRoutingModule { }
