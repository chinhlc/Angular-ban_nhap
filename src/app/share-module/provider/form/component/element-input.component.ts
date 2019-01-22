import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormValidationService} from '../form-validation';
import {FormMessService} from '../notify-mess';

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

  constructor(
    protected formValidate: FormValidationService,
    public messInfo: FormMessService) {}

  ngOnInit() {
    console.log('1');
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
    console.log('3');
    if (this.typeElem === 'confirm_password' && needValid) {
      return this.validateConfirmPassword(this.modelValue, true);
    } else {
      console.log(needValid);
      if (!needValid || !this.validation) {
        this._validProperty = {
          isValid: true,
          mess: ''
        };
        return true;
      } else {
        console.log(this.modelValue);
        this._validProperty = <any>this.formValidate.validate(this.validation, this.modelValue);
        return this._validProperty.isValid;
      }
    }
  }

  changeValueCheckbox(value) {
    this.modelChange.emit(value);
  }
  changeValue(value) {
    // remove validate
    console.log('2');
    this._validateElement(false);

    this.modelValue = value;
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

  // Check Confirm Password
  validateConfirmPassword(value, onSubmit = false) {
    if (value) {
      const mess = 'Your password and confirmation password do not match.';
      if (this.match_value !== value) {
        this._validProperty = {
          isValid: false,
          mess: <any>this.messInfo.MessValidate(mess)
        };
        return this._validProperty.isValid;
      }
      return this._validProperty.isValid;
    } else {
      if (onSubmit) {
        const mess = 'This is required field';
        this._validProperty = {
          isValid: false,
          mess: <any>this.messInfo.MessValidate(mess)
        };
        return this._validProperty.isValid;
      }
      return this._validProperty.isValid;
    }
  }
}
