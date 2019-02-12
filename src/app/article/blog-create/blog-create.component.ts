import { Component, OnInit } from '@angular/core';

import {FormValidationService} from '../../share-module/provider/form/form-validation';

// import {AlertService} from '../../share-module/notification/alert.service';
// import {IToastMessage} from '../../share-module/notification/models/alert.interface';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  txtName: string = '';
  txtMess: string = '';
  isSave = false;

  constructor(
    protected formValidate: FormValidationService,
    // private alertservice: AlertService,
  ) { }
  ngOnInit() { }

  FormCheckVal(): boolean {
    if (this.isSave)
      return true;
    else if (this.txtName.length > 0 || this.txtMess.length >0)
      return false;
    return true;
  }

  submitForm(){
    // this.alertservice.success(IToastMessage.Success);

    this.isSave = true;
    this.formValidate.submit('change-password', () => {
      console.log('have validate');
    }, true);
  }

  // Select
  private _value_select = {};

  changeValue(value: any): void {
    this._value_select = value;
  }

  getOptionsSelectData() {
     const data_select = {'data': [
                                {'value': '', 'label': 'Choose an option', 'disabled': false, 'outOfStock': false},
                                {'value': '49', 'label': 'Black', 'disabled': false, 'outOfStock': false},
                                {'value': '52', 'label': 'Gray', 'disabled': false, 'outOfStock': false}
                                ],
                          'isMultiSelect': false,
                          'isDisabled': false
                        }
    return data_select;
  }

}
