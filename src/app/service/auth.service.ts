import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated: boolean = false;

  constructor() { }

  login(challenger_name: string, game_master_name: string): boolean {
    if (challenger_name !== '' && game_master_name !== ''){
      this.isAuthenticated = true;
      return true;
    }else{
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
