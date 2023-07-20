import { Component } from '@angular/core';
import { GameManagerService } from 'src/app/service/game-manager.service';

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.scss']
})
export class TransitionScreenComponent {

  playerName: string = '';
  constructor(private gameMasterService: GameManagerService){

  }
  ngOnInit(){
    this.playerName = this.gameMasterService.playerNameBynextPlayerId;
  }

  onPlayerReady() : void {

  }
}
