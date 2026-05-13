import { elementSelector } from "../utils/elementSelector.js";

const domElements = {
    scoreElement: elementSelector(".destroy-count"),
    lifeElement: elementSelector(".life-count"),
    asteroidArea: elementSelector(".asteroid-area"),
    dangerZone: elementSelector(".danger-zone"),
    rocket: elementSelector(".rocket"),
    startScreen: elementSelector(".start-screen"),
    gameEndScreen: elementSelector(".game-over-screen"),
    pauseButton: elementSelector(".pause-btn")
};

export { domElements }; 