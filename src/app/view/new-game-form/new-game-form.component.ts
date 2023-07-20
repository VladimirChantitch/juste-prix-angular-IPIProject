import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth/auth.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.scss']
})
export class NewGameFormComponent {
  submitLabel:string = 'Submit';

  loginForm: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router, private formBuilder: FormBuilder, private gameManagerService: GameManagerService) {
    this.loginForm = this.formBuilder.group({
      challenger_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ],
      game_master_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ]
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const challenger_name = this.loginForm.get('challenger_name')?.value;
    const game_master_name = this.loginForm.get('game_master_name')?.value;
    const isLoggedIn = this.authService.login(challenger_name, game_master_name);

    if (isLoggedIn) {
      this.gameManagerService.setPlayersName(challenger_name, game_master_name);
      this.router.navigate(['/transition']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  ngOnInit(): void {

	}
}

