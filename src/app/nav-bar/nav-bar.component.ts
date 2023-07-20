import { Component } from '@angular/core';
import { GameManagerService } from '../service/game-manager/game-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  constructor(private gameMasterService: GameManagerService, private router: Router){

  }

  LogOut() {
    this.router.navigate(this.gameMasterService.logOut());
  }

  get play_contextual_message(): string{
    if (this.gameMasterService.gameStarted){
      return 'Resume Game ? ';
    }else{
      return 'New Game ? '
    }
  }

  get play_contextual_target(): string{
    if (this.gameMasterService.gameStarted){
      return '/transition';
    }else{
      return '/new-game'
    }
  }
}
