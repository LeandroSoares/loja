import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  login(user, pass) {
    // faker
    let observable = Observable.create(observer => {
      setTimeout(() => {
        observer.next({ authenticated: true });
        observer.complete();
      }, 500);
    });
    return observable;
  }
}
