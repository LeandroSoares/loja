import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit {
  show_book_form = false;
  current_book = null;
  current_method = null;
  current_form_title = 'Novo livro';

  books: Book[];
  dialog_titles = { 'store': 'Novo livro', 'update': 'Atualizar livro', 'destroy': 'Deletar livro' };

  constructor(private bookService: BookService) { this.updateBooks(); }

  updateBooks() {
    this.bookService.index()
      .subscribe((response: Book[]) => this.books = response);
  }

  hideBookForm() {
    this.show_book_form = false;
  }

  showBookForm(model = null, method = 'store') {
    this.current_book = model ? Book.makeFromModel(model) : new Book();
    this.show_book_form = true;
    this.current_method = method;
    this.current_form_title = this.dialog_titles[this.current_method];
  }

  bookFormFinish() {
    this.hideBookForm();
    this.updateBooks();
  }

  ngOnInit() {
  }

}
