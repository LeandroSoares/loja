import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books: Book[];
  show_cart = false;

  constructor(private cartService: CartService) { }

  addToCart(book: Book) {
    this.cartService.add(book);
  }
  removeFromCart(book: Book) {
    this.cartService.remove(book);
  }
  cartItemList(): CartItem[] {
    return this.cartService.index();
  }
  onUpdateBookSearch(data: Book[]) {
    this.books = data;
  }
  ngOnInit() { }
  showCart() { this.show_cart = true; }
  hideCart() { this.show_cart = false; }

}
