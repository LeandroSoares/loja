import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/models/book.model';
import { ICartItem } from 'src/app/models/cart-item.interface';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  @Input() controls: boolean = true;
  constructor(private cartService: CartService) { }

  addToCart(book: Book) {
    this.cartService.add(book);
  }
  removeFromCart(book: Book) {
    this.cartService.remove(book);
  }
  cartItemList(): ICartItem[] {
    return this.cartService.index();
  }
  getTotal() {
    return this.cartService.index().reduce((total, item) => (total + (item.quantity * item.book.price)), 0)
  }
  ngOnInit() {
  }

}
