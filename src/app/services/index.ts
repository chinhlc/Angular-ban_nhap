import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {AppStorage} from './global/storage';
import {ThemeManager} from './function/theme-manager';


export const APP_PROVIDERS = [
  LocalStorageService,
  SessionStorageService,
  AppStorage,
  ThemeManager,
];
