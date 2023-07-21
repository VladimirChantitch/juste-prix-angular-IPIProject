import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/service/card-Selector/ICard';
import { CardSelectorService } from 'src/app/service/card-Selector/card-selector.service';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';

@Component({
  selector: 'app-pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.scss']
})
export class PickCardComponent {
  iCards!: ICard[];
  canReady: boolean = false;
  currentCard!: ICard;
  isLoaded: boolean = false;

  constructor(private cardSelectorService: CardSelectorService, private gameManagerService: GameManagerService, private router: Router){

  }

  async ngOnInit() {
    try {
      this.iCards = await this.cardSelectorService.getFourNewCards();
      this.isLoaded = true;
    } catch (error) {
      console.error(error);
    }
  }

  onCardClicked(iCard: ICard){
    this.currentCard = iCard
    this.canReady = true;
    this.iCards.forEach((card) => (card.selected = false));
    iCard.selected = true;
  }

  onReadyClicked(){
    this.cardSelectorService.pickACard(this.currentCard.id);
    this.gameManagerService.setNextPlayerId();
    this.router.navigate(['/transition']);
  }
}
