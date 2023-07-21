import { Injectable } from '@angular/core';
import * as Scry from 'scryfall-api';
import { ICard } from '../card-Selector/ICard';

@Injectable({
  providedIn: 'root'
})
export class ScryfallClientService {
  iCards: ICard[] = [];

  clear(){
    this.iCards = [];
  }

  constructor() {
    this.fourICards();

  }

  async fourICards(): Promise<ICard[]> {
    this.clear();
    const promises = [];

    while (this.iCards.length < 4) {
      promises.push(this.getSingleCardWithValidPrice());
      this.iCards = await Promise.all(promises);
    }

    return this.iCards;
  }

  async getSingleCardWithValidPrice() : Promise<ICard>  {
    const result = await Scry.Cards.random();
    const card = result as Scry.Card;
    const price = parseFloat(card.prices.eur as string);

    if (!isNaN(price)) {
      const iCard: ICard = {
        id: 0,
        title: card.name,
        assetPath: card.image_uris?.normal as string,
        price: parseFloat(card.prices.eur as string),
        selected: false,
      };
      return iCard;
    } else {
      return this.getSingleCardWithValidPrice();
    }
  };
}
