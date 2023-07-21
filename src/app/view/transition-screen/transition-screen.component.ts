import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/service/game-manager/game-manager.service';

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.scss']
})
export class TransitionScreenComponent {

  playerName: string = '';
  constructor(private gameMasterService: GameManagerService, private router: Router){

  }
  ngOnInit(){
    this.playerName = this.gameMasterService.playerNameBynextPlayerId;
  }

  get nextRouteFromTransition() : string[]{
    if(!this.gameMasterService.gameToken.isCardPicked){
      return ['/pick-card'];
    }else if (this.gameMasterService.gameToken.nextPlayerId === 0){
      return ['/correction'];
    }
    return ['/guess'];
  }

  onPlayerReady() : void {
    this.router.navigate(this.nextRouteFromTransition);
  }
}
