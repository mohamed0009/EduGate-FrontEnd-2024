import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // return this.authService.isLoggedIn$.pipe(
    //   // take(1), // Take the latest value and complete the observable
    //   // map((isLoggedIn) => {
    //   //   if (isLoggedIn) {
    //   //     return true;
    //   //   } else {
    //   //     this.router.navigate(['/login']);
    //   //     return false;
    //   //   }
    //   // })
    // );
  }
}
