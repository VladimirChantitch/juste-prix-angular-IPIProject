import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICard } from 'src/app/service/card-Selector/ICard';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';
import { GuessService } from 'src/app/service/guess/guess.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent {
  iCard!: ICard;
  submitLabel:string = 'Guess READYYYY!';
  guessForm: FormGroup;
  control_label:string = 'guessed price';

  constructor(private gameManagerService: GameManagerService, private router: Router, private formBuilder:FormBuilder){
    this.iCard = gameManagerService.currentCard;
    this.guessForm = this.formBuilder.group({
      price: [
        '',
        [Validators.required, this.priceValidator]
      ],
    });
  }

  onGuessSubmit() : void{
    if (this.guessForm.invalid) {
      return;
    }

    const guess_price = this.guessForm.get('price')?.value;
    this.gameManagerService.setNextPlayerId();
    this.router.navigate(this.gameManagerService.tryAPrice(guess_price));
  }

  priceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    const isValid = priceRegex.test(control.value);

    return isValid ? null : { invalidPrice: true };
  }
}
