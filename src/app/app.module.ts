import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import {SelectivePreloadingStrategy} from './services/preloading-router';
import {APP_PROVIDERS} from './services';
import {SharedModule} from './share-module/dependency-injection/shared.module';

import {APP_PAGES} from './pages';
import { XrouterModule } from './pages/xrouter/xrouter.module';
import { WrapRouterRoutingModule } from './wrouter/wrap-router-routing.module';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {SHARE_PROVIDERS} from './share-module/provider/provider-service';


@NgModule({
  declarations: [
    AppComponent,
    ...APP_PAGES,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (retailTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(ROUTES,{preloadingStrategy: SelectivePreloadingStrategy}),
    XrouterModule,
    WrapRouterRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [
    SelectivePreloadingStrategy,
    ...APP_PROVIDERS,
    ...SHARE_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function retailTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
