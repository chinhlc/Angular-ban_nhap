import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormValidationService} from '../form-validation';
import * as moment from 'moment';


@Component({
             selector: 'app-time',
             templateUrl: 'time.component.html',
           })
export class ElementTimeComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() validation: string = '';
  @Input() formKey: string;

  modelValue;
  private _time;
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

  ngAfterViewInit(): void {
    if (typeof  this.model === 'undefined') {
      this.model           = {};
      let current          = moment();
      this._time           = current;
      this.model.hour      = current.seconds(0).format('hh');
      this.model.minute    = current.seconds(0).format('mm');
      this.model.day_part  = current.seconds(0).format('a');
      this.model.data_time = current.seconds(0).format();
      this.changeDetector.detectChanges();
    } else {
      // this._time = moment();
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
      return true;
    } else {
      this._validProperty = <any>this.formValidationService.validate(this.validation, this.model.data_time);
      return this._validProperty.isValid;
    }
  }
  ngOnDestroy(): void {
    if (typeof this._validateSubscription != 'undefined')
      this._validateSubscription.unsubscribe();
  }

  changeValue(value) {
    let current          = moment(value , 'HH:mm');
    this._time           = current;
    this.model.hour      = current.format('HH');
    this.model.minute    = current.format('mm');
    this.model.day_part  = current.format('a');
    this.model.data_time = value;
  }

  getOutputTime() {
    if (this._time && this._time.format('HH:mm') !== 'Invalid date') {
      return this._time.seconds(0).format('HH:mm');
    } else {
      return moment().format('HH:mm');
    }
  }
}

