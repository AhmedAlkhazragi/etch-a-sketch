/** global variables */

let currentPencilColor = String(document.querySelector(".color-picker").value);
let canvasSize = 8;
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rgb = document.querySelector(".rgb");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const display = document.querySelector(".display");

/** draw grid function */

function drawGrid(input) {
    for (let i = 0; i < input * input; i++) {
        const div = document.createElement('div');
        div.className = "pixel";
        display.appendChild(div);
    }

    display.style['grid-template-columns'] = `repeat(${input}, ${input}fr)`;

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
    console.log(currentPencilColor);
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
        rgb.style.cssText = "border: none; background-color: white; color: #38393E;";
        eraser.style.cssText = "border: 5px solid #38393E; background-color:#38393E; color: lightgray;";
        document.querySelectorAll(".pixel").forEach(pixel => {
            pixel.addEventListener("mouseout", e => {
                if (mouseIsDown === true) {
                    currentPencilColor = "white";
                };
            });
        });
    });

    pencil.addEventListener("click", (e) => {
        rgb.style.cssText = "border: none; background-color: white; color: #38393E;";
        eraser.style.cssText = "border: none; background-color: white; color: #38393E;";
        pencil.style.cssText = "border: 5px solid #38393E; background-color:#38393E; color: lightgray;";

        document.querySelectorAll(".pixel").forEach(pixel => {
            pixel.addEventListener("mouseout", e => {
                if (mouseIsDown === true) {
                    currentPencilColor = String(document.querySelector(".color-picker").value);
                };
            });
        });
    });

    rgb.addEventListener("click", e => {
        pencil.style.cssText = "border: none; background-color: white; color: #38393E;";
        eraser.style.cssText = "border: none; background-color: white; color: #38393E;";
        rgb.style.cssText = "border: 5px solid #38393E; background-color:#38393E; color: lightgray;";
        document.querySelectorAll(".pixel").forEach(pixel => {
            pixel.addEventListener("mouseout", e => {
                if (mouseIsDown === true) {
                    currentPencilColor = randomRGB();
                };
            });
        });
    });
})
};

drawGrid(canvasSize);

function removePixel() {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.remove();
    })
};

plus.addEventListener("click", e => {
    if (canvasSize < 128) {
    canvasSize = (canvasSize * 2);
    removePixel();
    drawGrid(canvasSize);
    document.querySelector(".canvas-size").innerText =  `${canvasSize} x ${canvasSize}`;
    }
});

minus.addEventListener("click", e => {
    if (canvasSize > 8) {
    canvasSize = (canvasSize / 2);
    removePixel();
    drawGrid(canvasSize);
    document.querySelector(".canvas-size").innerText =  `${canvasSize} x ${canvasSize}`;
    }
});

function randomRGB() {
    let randomR = Math.floor((Math.random() * 255));
    let randomG = Math.floor((Math.random() * 255));
    let randomB = Math.floor((Math.random() * 255));

    return String(`rgb(${randomR}, ${randomG}, ${randomB})`);
};
