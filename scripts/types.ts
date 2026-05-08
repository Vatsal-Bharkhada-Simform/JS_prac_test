interface AsteroidHandler {
    asteroids: Map<string, HTMLElement>,
    asteroidNames: string[],
    selectedAsteroid: string,
    selectedAsteroidIndex: number,
    generateAsteroid: () => void,
    handleInput: (input: string) => void,
};

interface GameHandler {
    gameState: "PLAY" | "PAUSE" | "OVER",
    asteroidGenerator: () => void,
};

export type {AsteroidHandler, GameHandler};