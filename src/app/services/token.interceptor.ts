import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let TokenRequest = request.clone({
            setHeaders: {
                //Authorization: `Bearer ${_authService.getToken()}`
                Authorization: `${this._authService.getToken()}`
            }
        });
        return next.handle(TokenRequest);
    }
}

