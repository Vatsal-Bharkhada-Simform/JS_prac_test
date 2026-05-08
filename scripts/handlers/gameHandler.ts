import type { GameHandler } from "../types";
import { asteroidHandler } from "./asteroidHandler.js";

const gameHandler: GameHandler = {
    gameState: "PLAY",
    asteroidGenerator(){
        if(this.gameState === "PLAY"){
            let timer = setInterval(() => {
                if(this.gameState === "PLAY"){
                    asteroidHandler.generateAsteroid();
                } else {
                    clearInterval(timer);
                }
            }, 3000);
        }
    }
}

export { gameHandler };