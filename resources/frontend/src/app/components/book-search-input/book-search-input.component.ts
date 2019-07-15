import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-search-input',
  templateUrl: './book-search-input.component.html',
  styleUrls: ['./book-search-input.component.css']
})
export class BookSearchInputComponent implements OnInit {
  @Output() update: EventEmitter<Book[]> = new EventEmitter();
  query="";
  constructor(private bookService: BookService) { }
  updateSearch() {
    this.bookService.search(this.query).subscribe((response: Book[]) => this.update.emit(response));
  }
  ngOnInit() {
    this.updateSearch();
  }
}
