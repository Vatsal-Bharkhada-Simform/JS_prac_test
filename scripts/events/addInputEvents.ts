import { asteroidHandler } from "../handlers/asteroidHandler.js";
import { gameHandler } from "../handlers/gameHandler.js";
import { domElements } from "../views/domElements.js";

function addInputEvents(){
    document.addEventListener("keyup", (e: KeyboardEvent) => {
        if(gameHandler.gameState === "NOT_STARTED"){
            gameHandler.gameState = "PLAY";
            domElements.startScreen.style.display = "none";
            gameHandler.asteroidGenerator();
        } else if (gameHandler.gameState === "OVER") {
            gameHandler.gameState = "PLAY";
            gameHandler.lives = "❤️❤️❤️";
            domElements.gameEndScreen.style.display = "none";
            gameHandler.asteroidGenerator();
        } else if (gameHandler.gameState === "PAUSE") {
            gameHandler.gameState = "PLAY";
            gameHandler.playGame();
        } else {
            let input = e.key;
            let isAlphabet = /[a-zA-Z]/.test(input);
            
            if(input.length > 1 || !isAlphabet) return;
            
            input = input.toUpperCase();
            
            asteroidHandler.handleInput(input);
        }
    });

    domElements.pauseButton.addEventListener("click", () => {
        gameHandler.pauseGame();
    })
}

export {addInputEvents};