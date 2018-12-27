import {PageNotFound} from "./404";
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

export const APP_PAGES = [
  PageNotFound,
  HomeComponent,
  UserRegisterComponent,
  UserLoginComponent
];
