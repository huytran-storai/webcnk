import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { products } from 'src/product-list';
import { ToastController } from '@ionic/angular';
register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  product: any[] | undefined;
  flashLabel: boolean = true;
  constructor(private toastController: ToastController) {
    this.product = products;
  }

  ngOnInit() {
    this.welcomeToast();
  }

  welcomeToast() {
    this.toastCus();
  }
  
  async toastCus() {
    const toast = await this.toastController.create({
      message: `Công ty CNK - Xin kính chào quý khách, chúc quý khách một ngày tốt lành !`,
      duration: 3500,
      position: 'middle',
      color: 'success'
    });

    toast.present();
  }
}
