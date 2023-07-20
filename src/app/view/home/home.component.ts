import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private gameMasterService: GameManagerService, private router: Router){

  }

  startGame() {
    const url:string[] = this.gameMasterService.startANewGame();
    this.router.navigate(url);
  }
}
