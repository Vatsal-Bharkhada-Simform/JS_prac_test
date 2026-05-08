import type { GameHandler } from "../types";
import { pauseAnimation, playAnimation } from "../utils/handleAnimation.js";
import { domElements } from "../views/domElements.js";
import { asteroidHandler } from "./asteroidHandler.js";

const gameHandler: GameHandler = {
    gameState: "NOT_STARTED",
    gameScore: 0,
    lives: "❤️❤️❤️",
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
    },
    incrementScore(){
        this.gameScore++;
        domElements.scoreElement.innerText = String(this.gameScore);
    },
    decrementLives(){
        this.lives = this.lives.slice(0,this.lives.length-2);
        console.log(this.lives);
        domElements.lifeElement.innerText = this.lives;
        if(this.lives === ""){
            this.gameState = "OVER";
            this.showGameOverBanner();
            asteroidHandler.clearAllAsteroids();
        }
    },
    showGameOverBanner() {
        domElements.gameEndScreen.style.display = "flex";
        let scoreDisplayElement = domElements.gameEndScreen.querySelector(".score") as HTMLElement;
        if(scoreDisplayElement){
            scoreDisplayElement.innerText = `You destroyed ${this.gameScore} ${this.gameScore < 2 ? "asteroid" : "asteroids"}`
        }
    },
    targetAsteroid(asteroid){
        console.log(asteroid);
    },
    pauseGame(){
        asteroidHandler.asteroids.forEach(asteroid => {
            pauseAnimation(asteroid);
        });
        let textElement = domElements.startScreen.querySelector(".text") as HTMLElement;
        textElement.innerText = "Press any key to continue";
        domElements.startScreen.style.display = "flex";
        this.gameState = "PAUSE";
    },
    playGame(){
        asteroidHandler.asteroids.forEach(asteroid => {
            playAnimation(asteroid);
        });
        domElements.startScreen.style.display = "none";
    }
}

export { gameHandler };