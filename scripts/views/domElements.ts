const domElements = {
    scoreElement: document.querySelector(".destroy-count") as HTMLElement,
    lifeElement: document.querySelector(".life-count") as HTMLElement,
    asteroidArea: document.querySelector(".asteroid-area") as HTMLElement,
    dangerZone: document.querySelector(".danger-zone") as HTMLElement,
    rocket: document.querySelector(".rocket") as HTMLElement,
    startScreen: document.querySelector(".start-screen") as HTMLElement,
    gameEndScreen: document.querySelector(".game-over-screen") as HTMLElement,
    pauseButton: document.querySelector(".pause-btn") as HTMLElement
};

export { domElements }; 