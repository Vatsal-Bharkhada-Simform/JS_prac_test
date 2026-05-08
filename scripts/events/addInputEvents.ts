import { asteroidHandler } from "../handlers/asteroidHandler.js";

function addInputEvents(){
    document.addEventListener("keyup", (e: KeyboardEvent) => {
        let input = e.key;
        let isAlphabet = /[a-zA-Z]/.test(input);

        if(input.length > 1 || !isAlphabet) return;
        
        input = input.toUpperCase();

        asteroidHandler.handleInput(input);
    });
}

export {addInputEvents};