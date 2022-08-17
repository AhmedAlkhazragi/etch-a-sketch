/** global variables */

let currentPencilColor = String(document.querySelector(".color-picker").value);
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const darken = document.querySelector(".darken");
const lighten = document.querySelector(".lighten");
const rgb = document.querySelector(".rgb");

console.log(currentPencilColor);

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

drawGrid(32);

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

document.querySelector(".color-picker").addEventListener("mouseout", (e) => {
    currentPencilColor = String(document.querySelector(".color-picker").value);
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

    clear.addEventListener("click", (e) => {
        pixel.style['background-color'] = "white";
    });

    eraser.addEventListener("click", (e) => {
        pencil.style.cssText = "border: none; background-color: white; color: #38393E;";
        darken.style.cssText = "border: none; background-color: white; color: #38393E;";
        rgb.style.cssText = "border: none; background-color: white; color: #38393E;";
        lighten.style.cssText = "border: none; background-color: white; color: #38393E;";
        eraser.style.cssText = "border: 5px solid #38393E; background-color:#38393E; color: lightgray;";
        currentPencilColor = "white";
    });

    pencil.addEventListener("click", (e) => {
        darken.style.cssText = "border: none; background-color: white; color: #38393E;";
        lighten.style.cssText = "border: none; background-color: white; color: #38393E;";
        rgb.style.cssText = "border: none; background-color: white; color: #38393E;";
        eraser.style.cssText = "border: none; background-color: white; color: #38393E;";
        pencil.style.cssText = "border: 5px solid #38393E; background-color:#38393E; color: lightgray;";
        currentPencilColor = String(document.querySelector(".color-picker").value);
    })
})
