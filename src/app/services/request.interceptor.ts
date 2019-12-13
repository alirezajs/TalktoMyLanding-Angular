import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>, next: HttpHandler
    ): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                token: 'web',
                'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            },             
            url: `${environment.apiUrl}${request.url}`
        });
        return next.handle(request);
    }
}