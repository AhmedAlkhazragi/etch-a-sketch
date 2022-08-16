/** global variables */

let currentPencilColor = "black";
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const darken = document.querySelector(".darken");
const lighten = document.querySelector(".lighten");
const rgb = document.querySelector(".rgb");

/** draw grid function */

function drawGrid(input) {
    const display = document.querySelector(".display");

    for (let i = 0; i < input * input; i++) {
        const div = document.createElement('div');
        div.className = "pixel";
        display.appendChild(div);
    }

    display.style['grid-template-columns'] = `repeat(${input}, ${input}fr)`;
}

drawGrid(16);

/** draw event-listeners */

let mouseIsDown = false;
document.querySelectorAll(".pixel").forEach((pixel) => {
    pixel.addEventListener("mousedown", (e) => {
        mouseIsDown = true;
    })
    pixel.addEventListener("mouseup", (e) => {
        mouseIsDown = false;
    })
})

document.querySelectorAll(".pixel").forEach((pixel) => {
    pixel.addEventListener('dragstart', (e) => {
        e.preventDefault()
      });

    pixel.addEventListener("mousemove", (e) => {
        if (mouseIsDown) {
            pixel.style['background-color'] = currentPencilColor;
        }
    });

    pixel.addEventListener("click", (e) => {
        pixel.style['background-color'] = currentPencilColor;
    });
})