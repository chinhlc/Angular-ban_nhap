import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';   // Add ngClass, ngFor... for Child-module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NumberFormComponent} from './number-form/number-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NumberFormComponent,
  ],
  declarations: [
    NumberFormComponent,
  ],
  providers: [],
})

export class AllElementModule {}
