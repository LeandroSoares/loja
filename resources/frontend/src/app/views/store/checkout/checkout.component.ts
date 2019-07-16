import { Component, OnInit } from '@angular/core';
import { ICheckout } from 'src/app/models/checkout.interface';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model: ICheckout = {
    name: '',
    cpf: '',
    email: '',
    address: '',
    postalcode: '',
    cart: []
  };
  constructor(private checkoutService: CheckoutService, private cart: CartService, private router: Router) { }
  confirmCheckout() {
    let checkout_model = Object.assign(this.model, { cart: this.cart.index() });
    this.checkoutService.store(checkout_model)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error),
      );
    this.cart.destroy();
    this.router.navigateByUrl('checkout-ok');
  }
  handleError(error: any) {
    throw new Error(error.error.error);
  }
  handleResponse(response: any) {
   return 'ok';
  }
  ngOnInit() {
  }

}
