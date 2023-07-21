import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../card-Selector/ICard';
import { GuessService } from '../guess/guess.service';
import { IGuess } from '../guess/IGuess';
import { IGameToken } from './IGameToken';
import { IPlayer } from './IPlayer';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  gameToken: IGameToken;

  emptyCard: ICard = {
      id: -1,
      title: 'NOPE',
      assetPath: '/assets/emptyMTG.png',
      price: 0,
      selected: false
  }

  get emptyToken():IGameToken {
    const token: IGameToken = {
      gameMasterPlayer:{
        playerName : '',
        playerRole: '',
        playerScore: 0
      },
      challengerPlayer: {
        playerName : '',
        playerRole: '',
        playerScore: 0
      },
      cardPicked: this.emptyCard,
      nextPlayerId: 0,
      isGameStarted: false,
      isCardPicked: false,
      maxTries: 7,
      actualTries: 0,
      isGameWon: false,
      areCardsReady: false
    }
      return token;
  }

  constructor(private rooterService: Router, private guessService: GuessService) {
    this.gameToken = this.emptyToken;
  }

  startANewGame() : string[] {
    if (!this.gameToken.isGameStarted){
      return ['/new-game']
    }else{
      return ['/home']
    }
  }
  setPlayersName(challenger_name: string, game_master_name: string) {
    this.gameToken.challengerPlayer.playerName = challenger_name;
    this.gameToken.gameMasterPlayer.playerName = game_master_name;
    this.gameToken.isGameStarted = true;
  }

  setNextPlayerId() : void {
    if (this.gameToken.nextPlayerId === 0){
      this.gameToken.nextPlayerId = 1;
    }else if (this.gameToken.nextPlayerId === 1){
      this.gameToken.nextPlayerId = 0;
    }
  }

  tryAPrice(tryValue: number): string[]{
    this.guessService.SetNewCurrentGuess(tryValue);
    console.log(this.gameToken.cardPicked.price);
    if (tryValue.toString() === this.gameToken.cardPicked.price.toString()){
      this.gameToken.isGameWon = true;
      this.gameToken.challengerPlayer.playerScore += 1;
      return ['/win'];
    }else{
      this.gameToken.actualTries += 1;
      if (this.gameToken.actualTries >= this.gameToken.maxTries){
        this.gameToken.actualTries = 0;
        this.gameToken.isGameWon = false;
        this.gameToken.gameMasterPlayer.playerScore += 1;
        return ['/win'];
      }
      return ['/transition'];
    }
  }

  cardSelected(selectedCard: ICard){
    this.gameToken.cardPicked = selectedCard;
    this.gameToken.isCardPicked = true;
  }

  logOut() : string[]  {
    this.gameToken = this.emptyToken;
    return ['/home'];
  }

  replayGame() : string[]{
    const oldChallenger: IPlayer = this.gameToken.challengerPlayer;
    const oldGameMaster: IPlayer = this.gameToken.gameMasterPlayer;
    this.gameToken.challengerPlayer = oldGameMaster;
    this.gameToken.gameMasterPlayer = oldChallenger;
    this.gameToken.isCardPicked = false;
    this.gameToken.isGameWon = false;
    this.gameToken.actualTries = 0;
    this.gameToken.nextPlayerId = 0;
    return ['/transition'];
  }

  get gameState(): boolean{
    return this.gameToken.isGameStarted;
  }

  get playerNameBynextPlayerId(): string{
    if (this.gameToken.nextPlayerId === 0){
      return this.gameToken.gameMasterPlayer.playerName;
    }
    return this.gameToken.challengerPlayer.playerName;
  }

  get challengerName(): string {
    return this.gameToken.challengerPlayer.playerName;
  }

  get gameMastername(): string{
    return this.gameToken.gameMasterPlayer.playerName;
  }

  get currentGuess(): IGuess{
    return this.guessService.currentGuess;
  }

  setGuessComment(comment: string){
    this.guessService.SetGuessComment(comment);
  }

  get guesses(): IGuess[]{
    return this.guessService.guesses;
  }

  get winnerName() : string {
    if (this.gameToken.isGameWon){
      return '*Challenger* ' + this.gameToken.challengerPlayer.playerName;
    }
    return '*Game Master* ' + this.gameToken.gameMasterPlayer.playerName;
  }
}
