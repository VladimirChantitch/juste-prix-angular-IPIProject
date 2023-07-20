import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from './auth.service';
import { GameManagerService } from './game-manager.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router, private gameMasterService: GameManagerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn || !this.gameMasterService.gameState) {
      return this.router.createUrlTree(['/home']);
    }
    return true;
  }
}
