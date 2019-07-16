import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_url;
  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  login(email, password) {
    return this.http.post(this.api_url + 'login', { email, password });
  }
  logout() {
    return this.http.get(this.api_url + 'logout');
  }
}
