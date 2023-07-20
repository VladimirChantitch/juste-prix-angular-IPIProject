import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionInteractionComponent } from './view/correction-interaction/correction-interaction.component';
import { GuessComponent } from './view/guess/guess.component';
import { AuthGuardService } from './service/auth-guard/auth-gard.service';
import { HomeComponent } from './view/home/home.component';
import { NewGameFormComponent } from './view/new-game-form/new-game-form.component';
import { PickCardComponent } from './view/pick-card/pick-card.component';
import { TransitionScreenComponent } from './view/transition-screen/transition-screen.component';
import { WinComponent } from './view/win/win.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'correction', component: CorrectionInteractionComponent,  canActivate: [AuthGuardService] },
  { path: 'guess', component: GuessComponent, canActivate: [AuthGuardService] },
  { path: 'new-game', component: NewGameFormComponent },
  { path: 'pick-card', component: PickCardComponent, canActivate: [AuthGuardService]},
  { path: 'transition', component: TransitionScreenComponent, canActivate: [AuthGuardService]},
  { path: 'win', component: WinComponent, canActivate: [AuthGuardService]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
