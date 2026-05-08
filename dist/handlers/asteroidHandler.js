import { nameSet } from "../models/nameSet.js";
import { domElements } from "../views/domElements.js";
import { generateAsteroidElement } from "../views/generateElement.js";
const asteroidHandler = {
    asteroids: new Map(),
    asteroidNames: [],
    selectedAsteroid: "",
    selectedAsteroidIndex: -1,
    generateAsteroid() {
        let index = Math.floor(Math.random() * nameSet.length);
        let selectedName = nameSet[index] || "";
        let asteroidElement = generateAsteroidElement(selectedName);
        domElements.asteroidArea.append(asteroidElement);
        this.asteroidNames.push(selectedName);
        this.asteroids.set(selectedName, asteroidElement);
    },
    handleInput(input) {
        if (this.selectedAsteroid === "") {
            let index = this.asteroidNames.findIndex(word => word.startsWith(input));
            if (index === -1 || !this.asteroidNames[index])
                return;
            this.selectedAsteroidIndex = index;
            this.selectedAsteroid = this.asteroidNames[index];
        }
        if (this.selectedAsteroid[0] !== input)
            return;
        let updatedWord = this.selectedAsteroid.slice(1);
        this.selectedAsteroid = updatedWord;
        let asteroid = this.asteroids.get(this.asteroidNames[this.selectedAsteroidIndex] ?? "");
        if (!asteroid)
            return;
        if (this.selectedAsteroid === "") {
            asteroid?.remove();
            this.asteroidNames.splice(this.selectedAsteroidIndex, 1);
            this.selectedAsteroid = "";
            this.selectedAsteroidIndex = -1;
            return;
        }
        let nameElement = asteroid?.firstElementChild; //Assertion is valid as asteroid elements will always have HTML element child.
        if (nameElement) {
            nameElement.innerText = updatedWord;
        }
    }
};
export { asteroidHandler };
//# sourceMappingURL=asteroidHandler.js.map