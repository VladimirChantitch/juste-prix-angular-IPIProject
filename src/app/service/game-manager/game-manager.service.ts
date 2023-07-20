import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {


  gameStarted: boolean = false;
  _cardPicked: boolean = false;
  challenger_name: string ='';
  game_master_name: string = '';

  _nextPlayerId: number = 0;

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
    if (this._nextPlayerId === 0){
      this._nextPlayerId = 1;
    }else{
      this._nextPlayerId === 0;
    }
  }

  logOut() : string[]  {
    this.gameStarted = false;
    this._cardPicked = false;
    this.challenger_name ='';
    this.game_master_name = '';
    this._nextPlayerId = 0;
    return ['/home'];
  }

  get gameState(): boolean{
    return this.gameStarted;
  }

  get playerNameBynextPlayerId(): string{
    if (this._nextPlayerId === 0){
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

  get cardPicked(): boolean{
    return this.cardPicked
  }

  get nextPlayerId(): number{
    return this._nextPlayerId;
  }
}
