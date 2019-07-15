import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books: Book[];
  constructor() { }
  onUpdateBookSearch(data: Book[]) {
    this.books = data;
  }
  ngOnInit() {
  }

}
