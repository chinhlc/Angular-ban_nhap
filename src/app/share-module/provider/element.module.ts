import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';   // Add ngClass, ngFor... for Child-module

import {ElementInputComponent} from './form/component/element-input.component';

import {FormValidationService} from './form/form-validation';
// import {FormMessService} from './form/notify-mess';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ElementInputComponent,
  ],
  declarations: [
    ElementInputComponent,
  ],
  providers: [
    FormValidationService,
    // FormMessService,
  ],
})

export class ChildElementModule {}
