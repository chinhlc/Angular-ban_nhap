import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';   // Add ngClass, ngFor... for Child-module

import {ElementInputComponent} from './form/component/element-input.component';
import {ElementDateComponent} from './form/component/date.component';
import {ElementTimeComponent} from './form/component/time.component';

import {FormValidationService} from './form/form-validation';

import {TranslateModule} from '@ngx-translate/core';
// import {FormMessService} from './form/notify-mess';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  exports: [
    TranslateModule,
    ElementInputComponent,
    ElementDateComponent,
    ElementTimeComponent
  ],
  declarations: [
    ElementInputComponent,
    ElementDateComponent,
    ElementTimeComponent
  ],
  providers: [
    FormValidationService,
    // FormMessService,
  ],
})

export class ChildElementModule {}
