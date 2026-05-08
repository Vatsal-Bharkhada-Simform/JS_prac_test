import { asteroidHandler } from "./asteroidHandler.js";
const gameHandler = {
    gameState: "PLAY",
    asteroidGenerator() {
        if (this.gameState === "PLAY") {
            let timer = setInterval(() => {
                console.log("HIT");
                if (this.gameState === "PLAY") {
                    asteroidHandler.generateAsteroid();
                }
                else {
                    clearInterval(timer);
                }
            }, 3000);
        }
    }
};
export { gameHandler };
//# sourceMappingURL=gameHandler.js.map