import { Component, OnInit } from '@angular/core';
import { ICheckout } from 'src/app/models/checkout.interface';

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
  constructor() { }

  ngOnInit() {
  }

}
