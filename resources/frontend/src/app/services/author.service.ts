import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  api_url;
  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  index() {
    return this.http.get(this.api_url + 'author');
  }
  store(author: Author) {
    return this.http.post(this.api_url + 'author', author);
  }
  show(id: Number) {
    return this.http.get(this.api_url + 'author/' + id);
  }
  update(author: Author) {
    return this.http.put(this.api_url + 'author/' + author.id, author);
  }
  destroy(author: Author) {
    return this.http.delete(this.api_url + 'author/' + author.id);
  }
}
