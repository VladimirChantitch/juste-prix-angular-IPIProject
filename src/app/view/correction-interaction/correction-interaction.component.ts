import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/service/card-Selector/ICard';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';
import { IGuess } from 'src/app/service/guess/IGuess';

@Component({
  selector: 'app-correction-interaction',
  templateUrl: './correction-interaction.component.html',
  styleUrls: ['./correction-interaction.component.scss']
})
export class CorrectionInteractionComponent {
  iCard: ICard;
  iGuess: IGuess;
  constructor(private gameManagerService: GameManagerService, private router: Router){
    this.iCard = gameManagerService.currentCard;
    this.iGuess = gameManagerService.currentGuess;
  }

  onLessExpensiveClicked(){
    this.gameManagerService.setGuessComment('less expensive');
    this.gameManagerService.setNextPlayerId();
    this.router.navigate(['/transition']);
  }

  onMoreExpensiveClicked(){
    this.gameManagerService.setGuessComment('more expensive');
    this.gameManagerService.setNextPlayerId();
    this.router.navigate(['/transition']);
  }
}
