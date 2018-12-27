import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import {SelectivePreloadingStrategy} from './services/preloading-router';

import { ProductModule } from './product/product.module';
import {APP_PAGES} from './pages';
import { XrouterModule } from './pages/xrouter/xrouter.module';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_PAGES,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: SelectivePreloadingStrategy}),
    XrouterModule,
  ],
  providers: [
    SelectivePreloadingStrategy,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
