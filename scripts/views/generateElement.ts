import { asteroidHandler } from "../handlers/asteroidHandler.js";
import { domElements } from "./domElements.js";

function generateAsteroidElement(name: string): HTMLElement{
    let wrapper = document.createElement("div");
    let span = document.createElement("span");
    let innerWrapper = document.createElement("div");
    let img = document.createElement("img");
    let crosshair = document.createElement("img");
    
    wrapper.classList.add("asteroid");

    span.innerText = name;

    img.src = "./assets/images/compressed.png";
    img.alt = "Asteroid image";
    crosshair.src = "./assets/images/crosshair.png";
    crosshair.alt = "Asteroid image";

    crosshair.classList.add("crosshair");

    innerWrapper.append(img);
    innerWrapper.append(crosshair);
    
    wrapper.append(span);
    wrapper.append(innerWrapper);

    let animation = generateAnimation(wrapper);

    animation.onfinish = (e) => {
        console.log(e);   
        asteroidHandler.handleAsteroidImpact(name);
    }
    
    return wrapper;
}

function generateAnimation(wrapper: HTMLElement): Animation{
    let initialX = Math.floor(Math.random() * window.innerWidth);
    let initialY = -100;
    
    let finalX = domElements.rocket.offsetLeft;
    let finalY = domElements.rocket.offsetTop;

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
        duration: 10000
    }

    let animation = wrapper.animate(keyFrames, animationTiming);
    return animation;
}

export { generateAsteroidElement };