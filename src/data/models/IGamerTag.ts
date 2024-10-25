import { Game } from "./IGame";

export interface GamerTag {
    name:         string;
    id:           number;
    gamerTag:     string;
    imageUrl:     string;
    gamerScore:   string;
    achievements: Achievement[];
}

export interface Achievement {
    id:                  number;
    gameId:              number;
    currentAchievements: number;
    totalAchievements:   number;
    currentGamerscore:   number;
    totalGamerscore:     number;
    progressPercentage:  number;
    lastTimePlayed:      Date;
    userId:              number;
    createdAt:           Date;
    updatedAt:           Date;
    game:                Game;
}

