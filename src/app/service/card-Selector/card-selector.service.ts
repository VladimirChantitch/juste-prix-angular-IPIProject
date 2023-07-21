import { Injectable } from '@angular/core';
import { ICard } from './ICard';
import { GameManagerService } from '../game-manager/game-manager.service';
import { ScryfallClientService } from '../scryfall_client/scryfall-client.service';

@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {
  iCard!: ICard;
  cards!: ICard[];

  constructor(private gameManagerService: GameManagerService, private scryfallClient: ScryfallClientService) {

  }

  pickACard(id: number) : void{
    console.log(id);
    this.iCard = this.cards.find(c => c.id === id) as ICard;
    this.gameManagerService.gameToken.isCardPicked = true;
    this.iCard.selected = true;
    this.gameManagerService.cardSelected(this.iCard);
  }

  index:number = 0;
  async getFourNewCards(): Promise<ICard[]> {
    if (this.gameManagerService.gameToken.areCardsReady === false){
      this.cards = await this.scryfallClient.fourICards();
      if (this.cards.length > 0){
        this.gameManagerService.gameToken.areCardsReady = true;
      }
    }

    for (const card of this.cards) {
      card.id = this.index;
      this.index += 1;
    }

    return this.cards;
  }
}
