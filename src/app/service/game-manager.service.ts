import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {


  gameStarted: boolean = false;
  challenger_name: string ='';
  game_master_name: string = '';

  nextPlayerId: number = 0;

  constructor(private rooterService: Router) { }

  startANewGame() : string[] {
    if (!this.gameStarted){
      return ['/new-game']
    }else{
      return ['/home']
    }
  }
  setPlayersName(challenger_name: string, game_master_name: string) {
    this.challenger_name = challenger_name;
    this.game_master_name = game_master_name;
    this.gameStarted = true;
  }

  setNextPlayerId() : void {
    if (this.nextPlayerId === 0){
      this.nextPlayerId = 1;
    }else{
      this.nextPlayerId === 0;
    }
  }

  get gameState(): boolean{
    return this.gameStarted;
  }

  get playerNameBynextPlayerId(): string{
    if (this.nextPlayerId === 0){
      return this.game_master_name;
    }
    return this.challenger_name;
  }

  get challengerName(): string {
    return this.challenger_name;
  }

  get gameMastername(): string{
    return this.game_master_name;
  }
}
