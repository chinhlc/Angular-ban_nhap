import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';   // Add ngClass, ngFor... for Child-module

import {ElementInputComponent} from './form/component/element-input.component';
import {ElementDateComponent} from './form/component/date.component';

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
  ],
  declarations: [
    ElementInputComponent,
    ElementDateComponent
  ],
  providers: [
    FormValidationService,
    // FormMessService,
  ],
})

export class ChildElementModule {}
