import { addInputEvents } from "./events/addInputEvents.js";
import { gameHandler } from "./handlers/gameHandler.js";

addInputEvents();
gameHandler.asteroidGenerator();