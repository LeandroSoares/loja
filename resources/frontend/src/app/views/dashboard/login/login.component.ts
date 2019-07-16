import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  error;
  constructor(
    private authentication: AuthenticationService,
    private token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.error = null;
    this.authentication
      .login(this.email, this.password)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error),
      );
  }
  handleResponse(response) {
    this.token.handle(response.access_token);
    this.router.navigateByUrl('/dashboard');
  }
  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }
}
