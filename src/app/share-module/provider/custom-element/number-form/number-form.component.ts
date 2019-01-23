import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// import {ValidateInteger} from './validators/integer.validator';


@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent implements OnInit {
  numberForm: FormGroup;
  focus = false;
  withEntry = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // using custom validator
    // this.numberForm = this.fb.group({
    //   bound: ['', ValidateInteger],
    // }, { updateOn: 'blur' });

    this.numberForm = this.fb.group({
      number: new FormControl(null, {
        validators: [
          Validators.min(-100),
          Validators.max(100),
          Validators.pattern('^[-?0-9]+$'),
          Validators.required,
        ],
        updateOn: 'blur'
      })
    });

    // Chạy khi updateOn: 'blur' chạy
    this.numberForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  handleFocus(): void {
    this.focus = true;
    console.log('focus', this.focus);
  }

  handleBlur(value): void {
    this.withEntry = value || value === 0 ? true : false;
    this.focus = false;
    console.log('blur', this.focus);
  }
}


