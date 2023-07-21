import { Component, Input } from '@angular/core';
import { IPlayer } from '../service/game-manager/IPlayer';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent {
  @Input() player1!: IPlayer;
  @Input() player2!: IPlayer;
}
