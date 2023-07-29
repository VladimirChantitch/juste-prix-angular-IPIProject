import { Component } from '@angular/core';
import { GameManagerService } from './service/game-manager/game-manager.service';
import { IPlayer } from './service/game-manager/IPlayer';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'juste-prix';

  constructor(private gameManagerService: GameManagerService, private _electronService: ElectronService){

  }


  get play_contextual_message(): string{
    if (this.gameManagerService.gameToken.isGameStarted){
      return 'Resume Game ? ';
    }else{
      return 'New Game ? '
    }
  }

  get play_contextual_target(): string{
    if (this.gameManagerService.gameToken.isGameStarted){
      return '/transition';
    }else{
      return '/new-game'
    }
  }

  get isGameStarted() : boolean{
    return this.gameManagerService.gameToken.isGameStarted;
  }

  get player1() : IPlayer{
    return this.gameManagerService.gameToken.challengerPlayer;
  }

  get player2() : IPlayer{
    return this.gameManagerService.gameToken.gameMasterPlayer;
  }
}
