import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];

  index(): CartItem[] {
    return this.cart;
  }

  add(book: Book) {
    let possibleItemIndex = this.cart.findIndex(item => item.book.id == book.id);
    if (possibleItemIndex == -1) {
      this.cart.push({ book, quantity: 1 });
    } else {
      this.cart[possibleItemIndex].quantity++;
    }
    localStorage.setItem('loja-cart', JSON.stringify(this.cart));
  }

  remove(book: Book) {
    let possibleItemIndex = this.cart.findIndex(item => item.book.id == book.id);
    if (possibleItemIndex > -1) {
      this.cart[possibleItemIndex].quantity--;
      if (this.cart[possibleItemIndex].quantity == 0) {
        this.cart.splice(possibleItemIndex, 1);
      }
    }
    localStorage.setItem('loja-cart', JSON.stringify(this.cart));
  }
  constructor() {
    let loadedCart = JSON.parse(localStorage.getItem('loja-cart'));
    if (loadedCart) {
      this.cart = loadedCart;
    }
  }
}
