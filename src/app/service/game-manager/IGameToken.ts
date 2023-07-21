import { ICard } from "../card-Selector/ICard";
import { IPlayer } from "./IPlayer";

export interface IGameToken{
  gameMasterPlayer: IPlayer;
  challengerPlayer: IPlayer;
  cardPicked: ICard;
  nextPlayerId: number;
  isGameStarted: boolean;
  isCardPicked: boolean;
  maxTries: number;
  actualTries: number;
  isGameWon: boolean;
}


