import { Component, Input } from '@angular/core';
import { IGuess } from '../service/guess/IGuess';

@Component({
  selector: '[app-guess-row]',
  templateUrl: './guess-row.component.html',
  styleUrls: ['./guess-row.component.scss']
})
export class GuessRowComponent {
  @Input() guess!: IGuess;
}
