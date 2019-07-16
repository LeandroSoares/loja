import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  api_url;
  private iss = { login: '' };
  constructor() {
    this.api_url = environment.api_url;
    this.iss.login = (this.api_url + 'login');
  }
  authorization(): string | string[] {
    return 'Bearer '+this.get();
  }
  handle(token) {
    this.set(token);
  }
  loggedIn(): boolean {
    return this.isValid();
  }
  set(token) {
    localStorage.setItem('_token', token);
  }
  get() {
    return localStorage.getItem('_token');
  }
  remove() {
    localStorage.removeItem('_token');
  }
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return (Object.values(this.iss).indexOf(payload.iss) > -1);
      }
    }
    return false;
  }
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload) {
    return JSON.parse(atob(payload));
  }
}
