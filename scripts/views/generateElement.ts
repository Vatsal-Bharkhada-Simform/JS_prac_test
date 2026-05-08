import { domElements } from "./domElements.js";

function generateAsteroidElement(name: string): HTMLElement{
    let wrapper = document.createElement("div");
    let span = document.createElement("span");
    let img = document.createElement("img");
    
    wrapper.classList.add("asteroid");

    span.innerText = name;

    img.src = "./assets/images/compressed.png";
    img.alt = "Asteroid image";
    
    wrapper.append(span);
    wrapper.append(img);

    generateAnimation(wrapper);
    
    return wrapper;
}

function generateAnimation(wrapper: HTMLElement): void{
    let initialX = Math.floor(Math.random() * window.innerWidth);
    let initialY = -100;

    console.log(initialX);
    
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

    wrapper.animate(keyFrames, animationTiming);
}

export { generateAsteroidElement };