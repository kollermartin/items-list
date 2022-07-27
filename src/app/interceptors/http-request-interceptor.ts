import { Injectable } from "@angular/core";
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { Observable } from "rxjs";
import { SpinnerService } from "../services/spinner.service";
import { finalize } from "rxjs/operators";
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{
  constructor(private spinnerService: SpinnerService){ }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    console.log(req);
    return next.handle(req).pipe(finalize(() => this.spinnerService.hide()));
  }

  publicshowSPinner() {
    this.spinnerService.show();
  }
}