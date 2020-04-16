import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/** http拦截器. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const token = window.localStorage.getItem('token');
        // 请求头信息中添加token信息
        const setHeaders = { 'Content-Type': 'application/json', token: '' };
        if (token) {
            setHeaders.token = token;
        }
        const authReq = req.clone({ setHeaders });
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
];
