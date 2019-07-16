import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url;
  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  private api(...params) {
    return this.api_url + params.join('');
  }
  me() {
    return this.http.get(this.api('me'));
  }
  search(query: String) {
    return this.http.get(this.api_url + 'user?q=' + query);
  }
  index() {
    return this.http.get(this.api_url + 'user');
  }
  store(user: Author) {
    return this.http.post(this.api_url + 'user', user);
  }
  show(id: Number) {
    return this.http.get(this.api_url + 'user/' + id);
  }
  update(user: Author) {
    return this.http.put(this.api_url + 'user/' + user.id, user);
  }
  destroy(user: Author) {
    return this.http.delete(this.api_url + 'user/' + user.id);
  }
}
