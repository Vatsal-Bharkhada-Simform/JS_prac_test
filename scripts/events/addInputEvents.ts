import { asteroidHandler } from "../handlers/asteroidHandler.js";
import { gameHandler } from "../handlers/gameHandler.js";
import { domElements } from "../views/domElements.js";

function addInputEvents(){
    document.addEventListener("keyup", (e: KeyboardEvent) => {
        if(gameHandler.gameState === "NOT_STARTED"){        // If game is not started, start the game on keypress
            gameHandler.gameState = "PLAY";
            domElements.startScreen.style.display = "none";
            gameHandler.asteroidGenerator();
        } else if (gameHandler.gameState === "OVER") {      // If game has ended, start new game on keypress
            gameHandler.gameState = "PLAY";
            gameHandler.gameScore = 0;
            gameHandler.lives = "❤️❤️❤️";
            domElements.scoreElement.innerText = "0";
            domElements.gameEndScreen.style.display = "none";
            gameHandler.asteroidGenerator();
        } else if (gameHandler.gameState === "PAUSE") {     // If game is paused, resume it on keypress
            gameHandler.gameState = "PLAY";
            gameHandler.playGame();
            gameHandler.asteroidGenerator();
        } else {                                            // Else check the key match on any asteroid
            let input = e.key;
            let isAlphabet = /[a-zA-Z]/.test(input);
            
            if(input.length > 1 || !isAlphabet) return;
            
            input = input.toUpperCase();
            
            asteroidHandler.handleInput(input);
        }
    });

    domElements.pauseButton.addEventListener("click", () => {    // Pause game
        gameHandler.pauseGame();
    })
}

export {addInputEvents};