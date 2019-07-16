import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private injector: Injector, private router: Router, private token: TokenService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const authReq = this.token.isValid() ? req.clone({
			headers: req.headers.set('Authorization', this.token.authorization())
		}) : req;
		return next.handle(authReq);
	}

}