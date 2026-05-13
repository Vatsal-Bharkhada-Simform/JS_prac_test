import { asteroidHandler } from "../handlers/asteroidHandler.js";
import { domElements } from "./domElements.js";

// Generate asteroid element and set the name 
// Add moving animation to the asteroid 
function generateAsteroidElement(name: string): HTMLElement{
    const wrapper = document.createElement("div");
    const span = document.createElement("span");
    const innerWrapper = document.createElement("div");
    const img = document.createElement("img");
    const crosshair = document.createElement("img");
    
    wrapper.classList.add("asteroid");

    span.innerText = name;

    img.src = "./assets/images/compressed.png";
    img.alt = "Asteroid image";
    crosshair.src = "./assets/images/crosshair.png";
    crosshair.alt = "Crosshair";

    crosshair.classList.add("crosshair");

    innerWrapper.append(img);
    innerWrapper.append(crosshair);
    
    wrapper.append(span);
    wrapper.append(innerWrapper);

    const animation = generateAnimation(wrapper);

    // Handle asteroid imapact if asteroid is not destroyed
    // This event will not execute for destroyed/removed asteroid elements
    animation.onfinish = () => {
        asteroidHandler.handleAsteroidImpact(name);
    };
    
    return wrapper;
}

// Generate random initial coordinates to create asteroid movement animation
function generateAnimation(wrapper: HTMLElement): Animation{
    const initialX = Math.floor(Math.random() * window.innerWidth);
    const initialY = -100;
    
    const dangerZoneRect = domElements.dangerZone.getBoundingClientRect();
    const finalX = Math.floor(dangerZoneRect.width/2);
    const finalY = dangerZoneRect.top;

    const keyFrames: Keyframe[] = [
        {
            top: initialY+"px",
            left: initialX+"px"
        },
        {
            top: finalY+"px",
            left: finalX+"px"
        }
    ];

    const animationTiming: KeyframeAnimationOptions = {
        duration: 10000,
    }

    const animation = wrapper.animate(keyFrames, animationTiming);    // Use the animate webAPI to add animation using JavaScript
    return animation;
}

export { generateAsteroidElement };