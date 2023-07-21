import { Injectable } from '@angular/core';
import { ICard } from './ICard';
import { GameManagerService } from '../game-manager/game-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {
  iCard!: ICard;
  iCards: ICard[] = [];

  constructor(private gameManagerService: GameManagerService) {
    this.iCards = [
      {
        id: 0,
        title: 'Anneau de souhait',
        assetPath: '/assets/emptyMTG.png',
        price: 12.84,
        selected: false
      },
      {
        id: 1,
        title: 'Shiny mountain',
        assetPath: '/assets/emptyMTG.png',
        price: 0.92,
        selected: false
      },
      {
        id: 2,
        title: 'Dance of the sun',
        assetPath: '/assets/emptyMTG.png',
        price: 4.32,
        selected: false
      },
      {
        id: 3,
        title: 'Lord Elfric',
        assetPath: '/assets/emptyMTG.png',
        price: 175.94,
        selected: false
      }
    ];
  }

  pickACard(id: number) : void{
    this.iCard = this.iCards.find(c => c.id === id) as ICard;
    this.gameManagerService.cardPicked = true;
    this.iCard.selected = true;
    this.gameManagerService.cardSelected(this.iCard);
  }

  getFourNewCards() : ICard[]{
    return this.iCards; //lets use an API Later && keep the array as solution if the API fails
  }
}
