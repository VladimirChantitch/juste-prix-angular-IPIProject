import { Component } from '@angular/core';
import { ICard } from 'src/app/service/card-Selector/ICard';
import { CardSelectorService } from 'src/app/service/card-Selector/card-selector.service';

@Component({
  selector: 'app-pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.scss']
})
export class PickCardComponent {
  iCards!: ICard[];
  canReady: boolean = false;
  currentCard!: ICard;

  constructor(private cardSelectorService: CardSelectorService){

  }

  ngOnInit(){
    this.iCards = this.cardSelectorService.getFourNewCards();
  }

  onCardClicked(iCard: ICard){
    this.currentCard = iCard
    this.canReady = true;
  }

  onReadyClicked(){
    this.cardSelectorService.pickACard(this.currentCard.id);
  }
}
