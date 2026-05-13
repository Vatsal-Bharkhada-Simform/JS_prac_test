export function removeAnimation(element: HTMLElement){
    const animations = element.getAnimations();
    animations.forEach(animation => animation.cancel());
}

export function pauseAnimation(element: HTMLElement){
    const animations = element.getAnimations();
    animations.forEach(animation => animation.pause());
}

export function playAnimation(element: HTMLElement){
    const animations = element.getAnimations();
    animations.forEach(animation => animation.play());
}