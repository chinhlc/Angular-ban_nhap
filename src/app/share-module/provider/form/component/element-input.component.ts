import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormValidationService} from '../form-validation';

@Component({
  selector: 'app-elform',
  templateUrl: 'element-input.component.html',
})
export class ElementInputComponent implements OnInit, OnDestroy {
  @Input() typeElem: string;
  @Input() validation: string;
  @Input() formKey: string;
  @Input() classElem: string;
  @Input() styleInput: string;
  @Input() customStyle: string;
  @Input() disabled = false;
  @Input() match_value: string;
  @Input('placeHolderText') placeHolderText: string;
  @Input('checkboxLabel') checkboxLabel: string;

  @Output() modelChange = new EventEmitter();

  @Input()

  modelValue: string;
  protected _validateSubscription: Subscription;
  protected _validProperty = {
    isValid: true,
    mess: ''
  };

  constructor(protected formValidate: FormValidationService) {}

  ngOnInit() {
    this._validateSubscription = this.formValidate
      .onSubmitOrCancel(
        this.formKey,
        () => this._validateElement(true),
        () => this._validateElement(false)
      );
  }

  ngOnDestroy(): void {
    if (typeof this._validateSubscription) {
      this._validateSubscription.unsubscribe();
    }
  }

  protected _validateElement(needValid): boolean {
    if (!needValid || !this.validation) {
      this._validProperty = {
        isValid: true,
        mess: ''
      };
      return true;
    } else {
      this._validProperty = <any>this.formValidate.validate(this.validation, this.modelValue);
      return this._validProperty.isValid;
    }
  }

  changeValueCheckbox(value) {
    this.modelChange.emit(value);
  }
  changeValue(value) {
    // remove validate
    this._validateElement(false);
    this.modelChange.emit(value);
  }

  set model(optionValue: string) {
    // remove validate
    this._validateElement(false);
    if (optionValue === null || typeof optionValue === 'undefined') {
      optionValue = '';
    }
    this.modelValue = optionValue;
  }
  get model() {
    return this.modelValue;
  }
}
