export function removeAnimation(element: HTMLElement){
    let animations = element.getAnimations();
    animations.forEach(animation => animation.cancel());
}

export function pauseAnimation(element: HTMLElement){
    let animations = element.getAnimations();
    animations.forEach(animation => animation.pause());
}

export function playAnimation(element: HTMLElement){
    let animations = element.getAnimations();
    animations.forEach(animation => animation.play());
}