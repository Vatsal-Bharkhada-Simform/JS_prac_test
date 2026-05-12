interface AsteroidHandler {
    asteroids: Map<string, HTMLElement>,
    asteroidNames: string[],
    selectedAsteroid: string,
    selectedAsteroidIndex: number,
    generateAsteroid: () => void,
    handleInput: (input: string) => void,
    handleAsteroidImpact: (name: string) => void,
    clearAllAsteroids: () => void,
};

interface GameHandler {
    gameState: "NOT_STARTED" | "PLAY" | "PAUSE" | "OVER",
    gameScore: number,
    lives: string,
    asteroidGenerator: () => void,
    incrementScore: () => void,
    decrementLives: () => void,
    showGameOverBanner: () => void,
    pauseGame: () => void,
    playGame: () => void,
};

export type {AsteroidHandler, GameHandler};