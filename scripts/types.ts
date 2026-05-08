interface AsteroidHandler {
    asteroids: Map<string, HTMLElement>,
    asteroidNames: string[],
    selectedAsteroid: string,
    selectedAsteroidIndex: number,
    generateAsteroid: () => void,
    handleInput: (input: string) => void,
    handleAsteroidImpact: (name: string) => void,
};

interface GameHandler {
    gameState: "PLAY" | "PAUSE" | "OVER",
    gameScore: number,
    lives: string,
    asteroidGenerator: () => void,
    incrementScore: () => void,
    decrementLives: () => void,
    showGameOverBanner: () => void,
};

export type {AsteroidHandler, GameHandler};