import { nameSet } from "../models/nameSet.js";
import { domElements } from "../views/domElements.js";
import { generateAsteroidElement } from "../views/generateElement.js";
const asteroidHandler = {
    asteroids: new Map(),
    generateAsteroid() {
        let index = Math.floor(Math.random() * nameSet.length);
        let selectedName = nameSet[index] || "";
        let asteroidElement = generateAsteroidElement(selectedName);
        domElements.asteroidArea.append(asteroidElement);
        this.asteroids.set(selectedName, asteroidElement);
    }
};
export { asteroidHandler };
//# sourceMappingURL=asteroidHandler.js.map