import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent {
  winnerName: string ='';

  constructor(private gameManagerService: GameManagerService, private router: Router){
    this.winnerName = gameManagerService.winnerName;
  }

  onPlayAgain() : void {
    this.router.navigate(this.gameManagerService.replayGame())
  }
}
