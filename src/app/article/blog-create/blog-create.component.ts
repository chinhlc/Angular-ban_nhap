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

  // Price magento
  getProduct() {
    const data_product_detail = {
      'id': '2062',
      'name': 'nga_simple',
      'sku': 'nga_simple',
      'price': '54345.0000',
      'special_price': '100.0000',
      'special_from_date': '2019-01-29 00:00:00',
      'special_to_date': null,
      'type_id': 'simple',
      'custom_attributes': null,
      'origin_image': 'http://mage2-i.product.smartosc.com/pub/media/retail/pos/cache/200x/i/m/images_9_.jpg',
      'media_gallery': [
        'http://mage2-i.product.smartosc.com/pub/media/catalog/product/i/m/images_9_.jpg'
      ],
      'stock_items': {
        'item_id': '2062',
        'product_id': '2062',
        'stock_id': '1',
        'qty': '269.0000',
        'min_qty': '0.0000',
        'use_config_min_qty': '1',
        'is_qty_decimal': '0',
        'backorders': '0',
        'use_config_backorders': '1',
        'min_sale_qty': '1.0000',
        'use_config_min_sale_qty': '1',
        'max_sale_qty': '10000.0000',
        'use_config_max_sale_qty': '1',
        'is_in_stock': '1',
        'low_stock_date': null,
        'notify_stock_qty': '1.0000',
        'use_config_notify_stock_qty': '1',
        'manage_stock': '1',
        'use_config_manage_stock': '1',
        'stock_status_changed_auto': '0',
        'use_config_qty_increments': '1',
        'qty_increments': '1.0000',
        'use_config_enable_qty_inc': '1',
        'enable_qty_increments': '0',
        'is_decimal_divided': '0',
        'website_id': '0',
        'type_id': 'simple'
      },
      'description': null,
      'customizable_options': [],
      'x_options': [],
      'related_product_ids': null,
      'check_related_product': false
    };
    return data_product_detail;
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
                        };
    console.log(JSON.stringify(data_select));

    return data_select;
  }

}
