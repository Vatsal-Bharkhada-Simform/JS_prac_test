export function removeAnimation(element: HTMLElement){
    let animations = element.getAnimations();
    animations.forEach(animation => animation.cancel())
}