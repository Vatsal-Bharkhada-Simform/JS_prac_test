interface AsteroidHandler {
    asteroids: Map<string, HTMLElement>,
    generateAsteroid: () => void,
};

interface GameHandler {
    gameState: "PLAY" | "PAUSE" | "OVER",
    asteroidGenerator: () => void,
};

export type {AsteroidHandler, GameHandler};