import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { products } from 'src/product-list';
register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  product: any[] | undefined;
  constructor() {
    this.product = products
    console.log(this.product);
  }
}
