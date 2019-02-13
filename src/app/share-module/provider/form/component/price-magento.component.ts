import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-magento',
  templateUrl: 'price-magento.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductPriceMagentoComponent implements OnInit{
  @Input() product: Object;

  ngOnInit(): void {
  }

  getProduct() {
    return this.product;
  }

}
