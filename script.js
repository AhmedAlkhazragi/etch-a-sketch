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

drawGrid(64);

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
            pixel.style['background-color'] = "black";
        }
    });

    pixel.addEventListener("click", (e) => {
        pixel.style['background-color'] = "black";
    });
})