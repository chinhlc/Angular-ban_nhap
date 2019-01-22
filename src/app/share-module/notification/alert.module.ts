import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';   // Add ngClass, ngFor... for Child-module

import {AlertlayoutComponent} from './alert-template/alertlayout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AlertlayoutComponent,
  ],
  declarations: [
    AlertlayoutComponent,
  ],
  providers: [],
})

export class AlertModule {}
