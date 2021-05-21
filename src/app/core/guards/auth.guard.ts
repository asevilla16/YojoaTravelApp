import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
    const isLoggedIn: boolean = this.authService.isLogged();

    if(isLoggedIn){
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
  
}
