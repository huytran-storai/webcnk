import { Component, } from '@angular/core';
import { products } from 'src/product-list';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage {

  product: any[] | undefined;
  constructor() {
    this.product = products
    console.log(this.product);
  }

}
