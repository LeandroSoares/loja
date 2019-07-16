import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiUtils } from './api-utils.service';
import { ICheckout } from '../models/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService extends ApiUtils {
  constructor(private http: HttpClient) {
    super(environment.api_url);
  }
  store(model: any) {
    localStorage.setItem('checkout-data', JSON.stringify(model));
    return this.http.post(this.api('checkout'), model);
  }
  restore(): ICheckout {
    return JSON.parse(localStorage.getItem('checkout-data'));
  }
  index() {
    return this.http.get(this.api('checkout'));
  }

  destroy() {
    localStorage.removeItem('checkout-data');
  }
}
