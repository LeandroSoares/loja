import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  api_url;
  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  search(query: String) {
    return this.http.get(this.api_url + 'book?q=' + query);
  }
  index() {
    return this.http.get(this.api_url + 'book');
  }
  store(book: Book) {
    return this.http.post(this.api_url + 'book', book);
  }
  show(id: Number) {
    return this.http.get(this.api_url + 'book/' + id);
  }
  update(book: Book) {
    return this.http.put(this.api_url + 'book/' + book.id, book);
  }
  destroy(book: Book) {
    return this.http.delete(this.api_url + 'book/' + book.id);
  }
}
