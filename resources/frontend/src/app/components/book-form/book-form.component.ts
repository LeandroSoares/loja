import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Output() success = new EventEmitter();
  @Output() abort = new EventEmitter();
  @Input() method: string = 'store';
  @Input('model') model: Book;
  errors: any;
  constructor(private bookService: BookService) {
    this.reset();
  }
  onSubmit() {
    console.log('save book', this.model, this.errors)
    if (!this.bookService[this.method]) {
      throw "The method:[" + this.method + "] don't exist in BookService.";
    }
    if (this.modelIsFilled()) {
      this.bookService[this.method](this.model).subscribe(response => this.resolveResponse(response));
    } else {
      this.verifyEmptyFields();
    }
  }

  onAbort() {
    this.abort.emit();
  }
  resolveResponse(response) {
    this.resetErrors();
    if (response && response['error']) {
      response['fields'].forEach(field => this.errors[field] = 'Já existe livro com este ' + field)
    } else {
      this.success.emit();
      this.reset();
    }
  }
  verifyEmptyFields() {
    for (const property of this.model.fillable()) {
      this.errors[property] = this.model[property] == null ? "Campo obrigatório" : false;
    }
    this.errors.authors = this.model.authors.length == 0 ? "Campo obrigatório" : false;
  }
  modelIsFilled() {
    this.verifyEmptyFields();
    let filled = Object.values(this.errors).reduce((last, current) => {
      return current != false ? false : last;
    }, true);
    return filled;
  }
  reset() {
    this.resetErrors();
    this.model = new Book();
  }
  resetErrors() {
    this.errors = {};
  }
  ngOnInit() {
    if (this.model == null) {
      this.model == new Book();
    }
  }
}
