import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiservesService } from "./apiserves.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptorService implements HttpInterceptor {

  constructor( private Injector:Injector) { }

  intercept(req , next){
    let apiservesService = this.Injector.get(ApiservesService)
    let tokinizedReq = req.clone({
      setHeaders :{
        Authorization : `Bearer  ${apiservesService.getToken()}`
      }
    })
    return next.handle(tokinizedReq)
  }
}


