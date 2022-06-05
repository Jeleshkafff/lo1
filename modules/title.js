export function createTitle(h1){
    const title = document.createElement("h1")
    title.textContent = h1
    title.classList.add("title")
    return title
}