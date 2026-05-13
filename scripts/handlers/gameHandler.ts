import type { GameHandler } from "../types";
import { elementSelector } from "../utils/elementSelector.js";
import { pauseAnimation, playAnimation } from "../utils/handleAnimation.js";
import { domElements } from "../views/domElements.js";
import { asteroidHandler } from "./asteroidHandler.js";

const gameHandler: GameHandler = {
    gameState: "NOT_STARTED",       // Game state 
    gameScore: 0,                   // Current score 
    lives: "❤️❤️❤️",                // Lives left, default 3
    _asteroidTimer: null,           // Interval timer for asteroidGenerator
    // Function to generate asteroid eveny 3 seconds when game state is "PLAY"
    asteroidGenerator(){
        if(this._asteroidTimer) clearInterval(this._asteroidTimer);
        if(this.gameState === "PLAY"){
            this._asteroidTimer = setInterval(() => {
                if(this.gameState === "PLAY"){
                    asteroidHandler.generateAsteroid();
                } else {
                    if(this._asteroidTimer) clearInterval(this._asteroidTimer);
                    this._asteroidTimer = null;
                }
            }, 3000);
        }
    },
    // Handle score increment and reflect in the proper DOM element
    incrementScore(){
        this.gameScore++;
        domElements.scoreElement.innerText = String(this.gameScore);
    },
    // Decrement lives and reflect in the proper DOM element
    decrementLives(){
        this.lives = this.lives.slice(0,this.lives.length-2);
        domElements.lifeElement.innerText = this.lives;
        if(this.lives === ""){
            this.gameState = "OVER";
            this.showGameOverBanner();
            asteroidHandler.clearAllAsteroids();
        }
    },
    // Function to show game over banner and 
    showGameOverBanner() {
        domElements.gameEndScreen.style.display = "flex";
        const scoreDisplayElement = elementSelector(".score");
        if(scoreDisplayElement){
            scoreDisplayElement.innerText = `You destroyed ${this.gameScore} ${this.gameScore < 2 ? "asteroid" : "asteroids"}`
        }
    },
    // Pause game by pausing all asteroid animations and showing pause screen
    pauseGame(){
        asteroidHandler.asteroids.forEach(asteroid => {
            pauseAnimation(asteroid);
        });
        const textElement = domElements.startScreen.querySelector(".text") as HTMLElement;
        textElement.innerText = "Press any key to continue";
        domElements.startScreen.style.display = "flex";
        this.gameState = "PAUSE";
    },
    // Continue paused animations and remove paused screen
    playGame(){
        asteroidHandler.asteroids.forEach(asteroid => {
            playAnimation(asteroid);
        });
        domElements.startScreen.style.display = "none";
    }
}

export { gameHandler };