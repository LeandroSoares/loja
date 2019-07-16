import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { ICartItem } from '../models/cart-item.interface';

export const CART_NAME = "cart";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ICartItem[] = [];

  index(): ICartItem[] {
    return this.cart;
  }

  add(book: Book) {
    let possibleItemIndex = this.cart.findIndex(item => item.book.id == book.id);
    if (possibleItemIndex == -1) {
      this.cart.push({ book, quantity: 1 });
    } else {
      this.cart[possibleItemIndex].quantity++;
    }
    localStorage.setItem(CART_NAME, JSON.stringify(this.cart));
  }

  remove(book: Book) {
    let possibleItemIndex = this.cart.findIndex(item => item.book.id == book.id);
    if (possibleItemIndex > -1) {
      this.cart[possibleItemIndex].quantity--;
      if (this.cart[possibleItemIndex].quantity == 0) {
        this.cart.splice(possibleItemIndex, 1);
      }
    }
    localStorage.setItem(CART_NAME, JSON.stringify(this.cart));
  }
  destroy() {
    localStorage.removeItem(CART_NAME);
  }
  constructor() {
    let loadedCart = JSON.parse(localStorage.getItem(CART_NAME));
    if (loadedCart) {
      this.cart = loadedCart;
    }
  }
}
