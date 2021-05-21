import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  canActivate(){
    if(this.authService.isLogged()){
      this.router.navigate(['/landing']);
      return false;
    } else {
      return true;
    }
  }
}
