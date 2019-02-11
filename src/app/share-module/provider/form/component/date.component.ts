import {
  Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormValidationService} from '../form-validation';
import * as moment from 'moment';

@Component({
             selector: 'app-date-select',
             templateUrl: 'date.component.html',
             changeDetection: ChangeDetectionStrategy.OnPush
           })

export class ElementDateComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() validation: string = '';
  @Input() formKey: string;
  @Input() minDate: any;
  @Input() useTimezone: boolean = false;

  modelValue;
  private _dateTime;
  protected _validateSubscription: Subscription;

  @Output() modelChange = new EventEmitter();

  @Input()
  set model(optionValue: any) {
    // remove validate
    this._validateElement(false);

    this.modelValue = optionValue;
    this.modelChange.emit(this.modelValue);
  }

  get model() {
    return this.modelValue;
  }

  protected _validProperty = {
    isValid: true,
    mess: ''
  };

  constructor(protected formValidationService: FormValidationService, protected changeDetector: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
    if (typeof this._validateSubscription !== 'undefined') {
      this._validateSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    if (typeof this.model === 'undefined') {
      this.model           = {};
      const current          = moment();
      this._dateTime       = current;
      this.model.month     = current.format('M');
      this.model.day       = current.date();
      this.model.year      = current.year();
      this.model.data_date = current.format('MM/DD/YYYY');
      this.changeDetector.detectChanges();
    } else {
      this._dateTime = moment();
      this.changeDetector.detectChanges();
    }
  }

  ngOnInit() {
    // for form validation
    this._validateSubscription = this.formValidationService
                                     .onSubmitOrCancel(
                                       this.formKey,
                                       () => this._validateElement(true),
                                       () => this._validateElement(false)
                                     );
  }

  protected _validateElement(needValid): boolean {
    if (!needValid || !this.validation) {
      this._validProperty = {
        isValid: true,
        mess: ''
      };
      this.changeDetector.detectChanges();
      return true;
    } else {
      this._validProperty = <any>this.formValidationService.validate(this.validation, this.model.data_date);
      this.changeDetector.detectChanges();
      return this._validProperty.isValid;
    }
  }

  getOutputTime() {
    if (this._dateTime) {
      return this._dateTime.format('YYYY-MM-DD');
    } else {
      return '';
    }
  }

  changeValue(value) {
    const current          = moment(value);
    this._dateTime       = current;
    this.model.month     = current.format('M');
    this.model.day       = current.date();
    this.model.year      = current.year();
    this.model.data_date = current.format('MM/DD/YYYY');
  }
}
