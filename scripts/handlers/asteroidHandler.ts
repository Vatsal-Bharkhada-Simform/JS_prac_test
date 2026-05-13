import { nameSet } from "../models/nameSet.js";
import type { AsteroidHandler } from "../types.js";
import { removeAnimation } from "../utils/handleAnimation.js";
import { domElements } from "../views/domElements.js";
import { generateAsteroidElement } from "../views/generateElement.js";
import { gameHandler } from "./gameHandler.js";

const asteroidHandler: AsteroidHandler = {
    asteroids: new Map(),           // Map to store generated asteroids
    asteroidNames: [],              // Array to store asteroid names
    selectedAsteroid: "",           // Currently selected asteroid
    selectedAsteroidIndex: -1,      // Index of selected asteroid in the map
    // Function to select a name from set of names and generate asteroid from it
    generateAsteroid(): void {
        if (this.asteroidNames.length >= nameSet.length) return;
        
        let index = Math.floor(Math.random() * nameSet.length);
        
        while(this.asteroidNames.includes(nameSet[index] ?? "")){
            index = Math.floor(Math.random() * nameSet.length);
        }
        let selectedName = nameSet[index] || "";

        let asteroidElement = generateAsteroidElement(selectedName);

        domElements.asteroidArea.append(asteroidElement);
        this.asteroidNames.push(selectedName);
        this.asteroids.set(selectedName, asteroidElement);
    },
    // Check if the input matches an asteroid name and select that asteroid 
    handleInput(input){
        if(this.selectedAsteroid === "") {
            let index = this.asteroidNames.findIndex(word => word.startsWith(input));
            
            if(index === -1 || !this.asteroidNames[index]) return;

            this.selectedAsteroidIndex = index;
            this.selectedAsteroid = this.asteroidNames[index];
        }
        
        if(this.selectedAsteroid[0] !== input) return;
        
        let updatedWord = this.selectedAsteroid.slice(1);
        this.selectedAsteroid = updatedWord;
        let asteroid = this.asteroids.get(this.asteroidNames[this.selectedAsteroidIndex] ?? "");

        if(!asteroid) return;

        asteroid.classList.add("selected");

        // If whole name of selected asteroid is properly inserted, destroy that asteroid
        if(this.selectedAsteroid === ""){
            gameHandler.incrementScore();
            this.asteroids.delete(this.asteroidNames[this.selectedAsteroidIndex] ?? "");
            removeAnimation(asteroid);
            asteroid?.remove();
            this.asteroidNames.splice(this.selectedAsteroidIndex, 1);
            this.selectedAsteroid = "";
            this.selectedAsteroidIndex = -1;
            return;
        }
        
        let nameElement = asteroid?.firstElementChild as HTMLElement; //Assertion is valid as asteroid elements will always have HTML element child.

        if(nameElement){
            nameElement.innerText = updatedWord;
        }
    },
    // Handle removal of asteroid when it collides with the rocket
    handleAsteroidImpact(name){
        if ((this.selectedAsteroid !== "" && this.selectedAsteroid.startsWith(name)) || this.asteroidNames[this.selectedAsteroidIndex] === name) {
            this.selectedAsteroid = "";
            this.selectedAsteroidIndex = -1;
        }
        if(this.asteroids.has(name)){
            gameHandler.decrementLives();
        }
        this.asteroids.get(name)?.remove();
        this.asteroidNames = this.asteroidNames.filter(asteroid => asteroid !== name);
    },
    // Clear all asteroids. To be used when game ends
    clearAllAsteroids(){
        Array.from(this.asteroids).forEach(asteroid => {
            removeAnimation(asteroid[1]);
            asteroid[1].remove();
        });
    }
};

export { asteroidHandler };