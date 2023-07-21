import { Component, Input } from '@angular/core';
import { IGuess } from '../service/guess/IGuess';

@Component({
  selector: 'app-guess-table',
  templateUrl: './guess-table.component.html',
  styleUrls: ['./guess-table.component.scss']
})
export class GuessTableComponent {
  @Input() guess_left!:number;
  @Input() guesses!:IGuess[];
}
