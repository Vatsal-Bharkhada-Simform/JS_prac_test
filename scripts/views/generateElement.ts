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
    return wrapper;
}

export { generateAsteroidElement };