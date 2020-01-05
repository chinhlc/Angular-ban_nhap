import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {AppStorage} from './global/storage';
import {ThemeManager} from './function/theme-manager';
import { DatabaseProvider } from "./global/indexDB";
import { DatabaseLoader } from "./global/indexDB-Load";
import { IndexDBpullData } from "./global/IndexDB-PullData";


export const APP_PROVIDERS = [
  LocalStorageService,
  SessionStorageService,
  AppStorage,
  ThemeManager,
  DatabaseProvider,
  DatabaseLoader,
  IndexDBpullData
];
