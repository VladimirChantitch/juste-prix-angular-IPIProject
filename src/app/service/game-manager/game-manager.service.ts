import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../card-Selector/ICard';
import { GuessService } from '../guess/guess.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {


  gameStarted: boolean = false;
  cardPicked: boolean = false;
  challenger_name: string ='';
  game_master_name: string = '';

  nextPlayerId: number = 0;

  currentCard!: ICard;
  emptycard: ICard = {
      id: -1,
      title: 'NOPE',
      assetPath: '/assets/emptyMTG.png',
      price: 0,
      selected: false
  }

  totalTries: number = 7;
  actualTries: number = 0;

  gameWon: boolean = false;

  constructor(private rooterService: Router, private guessService: GuessService) {
    this.currentCard = this.emptycard;
  }

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
    }else if (this.nextPlayerId === 1){
      this.nextPlayerId = 0;
    }
  }

  tryAPrice(tryValue: number): string[]{
    this.guessService.SetNewCurrentGuess(tryValue);
    if (tryValue === this.currentCard.price){
      this.gameWon = true;
      return ['/win'];
    }else{
      this.actualTries += 1;
      if (this.actualTries >= this.totalTries){
        this.actualTries = 0;
        this.gameWon = false;
        return ['/win'];
      }
      return ['/transition'];
    }
  }

  cardSelected(selectedCard: ICard){
    this.currentCard = selectedCard;
    this.cardPicked = true;
  }

  logOut() : string[]  {
    this.gameStarted = false;
    this.cardPicked = false;
    this.challenger_name ='';
    this.game_master_name = '';
    this.nextPlayerId = 0;
    this.currentCard = this.emptycard;
    return ['/home'];
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
