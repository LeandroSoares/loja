import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/models/book.model';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {

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

  ngOnInit() {
  }

}