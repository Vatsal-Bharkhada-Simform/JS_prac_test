export function elementSelector(selector: string): HTMLElement {
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Required DOM element not found: "${selector}"`);
    return el as HTMLElement;
}