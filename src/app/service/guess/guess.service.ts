import { Injectable } from '@angular/core';
import { IGuess } from './IGuess';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  currentGuess!: IGuess;
  guesses: IGuess[] = [];
  currentid: number = 0;

  constructor() { }

  SetNewCurrentGuess(price: number){
    const guess:IGuess = {
      Id: this.currentid,
      guessedPrice: price,
      comment:''
    }

    this.currentGuess = guess;
    this.guesses.push(guess);
  }

  SetGuessComment(comment:string){
    this.currentGuess.comment = comment;
  }
}
