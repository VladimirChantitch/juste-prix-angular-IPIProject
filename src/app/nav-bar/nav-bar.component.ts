import { Component, Input } from '@angular/core';
import { GameManagerService } from '../service/game-manager/game-manager.service';
import { Router } from '@angular/router';
import { IPlayer } from '../service/game-manager/IPlayer';

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

  @Input() play_contextual_target!: string;
  @Input() play_contextual_message!: string;
  @Input() isGameStarted!: boolean;
  @Input() player1!: IPlayer;
  @Input() player2!: IPlayer;
}
