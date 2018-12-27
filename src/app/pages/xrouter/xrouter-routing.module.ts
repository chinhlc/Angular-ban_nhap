import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  }, {
    path: 'register',
    component: UserRegisterComponent
  }, {
    path: 'home',
    component: HomeComponent
  }
];

// Tốt nhất ta cho phần register, login vào thành 1 phần con của auth

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

  // Đã khai báo trong file index nên không cần khái báo lại
  // declarations: [
  //   HomeComponent,
  //   UserRegisterComponent,
  //   UserLoginComponent,
  // ]
})
export class XrouterRoutingModule { }
