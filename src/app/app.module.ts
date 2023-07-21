import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { NewGameFormComponent } from './view/new-game-form/new-game-form.component';
import { TransitionScreenComponent } from './view/transition-screen/transition-screen.component';
import { PickCardComponent } from './view/pick-card/pick-card.component';
import { GuessComponent } from './view/guess/guess.component';
import { CorrectionInteractionComponent } from './view/correction-interaction/correction-interaction.component';
import { WinComponent } from './view/win/win.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameManagerService } from './service/game-manager/game-manager.service';
import { AuthServiceService } from './service/auth/auth.service';
import { FormErrorHandlerComponent } from './form-error-handler/form-error-handler.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GuessService } from './service/guess/guess.service';
import { GuessTableComponent } from './guess-table/guess-table.component';
import { GuessRowComponent } from './guess-row/guess-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewGameFormComponent,
    TransitionScreenComponent,
    PickCardComponent,
    GuessComponent,
    CorrectionInteractionComponent,
    WinComponent,
    FormErrorHandlerComponent,
    NavBarComponent,
    GuessTableComponent,
    GuessRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GameManagerService,
    AuthServiceService,
    GuessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
