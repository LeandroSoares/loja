import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-ok',
  templateUrl: './checkout-ok.component.html',
  styleUrls: ['./checkout-ok.component.css']
})
export class CheckoutOkComponent implements OnInit {
  model: any;

  constructor(private checkout: CheckoutService) { }

  ngOnInit() {
    this.model = this.checkout.restore();
    this.checkout.destroy();
  }
  itensTotalPrice() {
    return this.model.cart.reduce((total, item) => (total + (item.quantity * item.book.price)), 0)
  }
}
