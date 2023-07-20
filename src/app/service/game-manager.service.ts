import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  gameStarted: boolean = false;
  constructor(private rooterService: Router) { }

  startANewGame() : string[] {
    if (!this.gameStarted){
      return ['/new-game']
    }else{
      return ['/home']
    }
  }

  get gameState(): boolean{
    return this.gameStarted;
  }
}
