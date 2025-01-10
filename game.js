
/// Load font

const fontName = 'Yanone+Kaffeesatz:wght@200..700';

const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = 'anonymous';
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.rel = 'stylesheet';
link3.href = `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`;
document.head.appendChild(link3);

///

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const WIDTH = 500;
const HEIGHT = 500;

/// Load images

class Texture {
    image = new Image()
    constructor(src) {
        this.image.src = src;
    }
    
    Draw(x, y, width, height, u, v, w, h) {
        let scaled_x = canvas.width / WIDTH;
        let scaled_y = canvas.height / HEIGHT;
        context.drawImage(this.image, u, v, w, h, x * scaled_x, y * scaled_y, width * scaled_x, height * scaled_y);
    }
    DrawSimple(x, y, width, height) {
        this.Draw(x, y, width, height, 0, 0, this.image.width, this.image.height);
    }
    DrawCentered(x, y, width, height, u, v, w, h) {
        this.Draw(x - width / 2, y - height / 2, width, height, u, v, w, h);
    }
    DrawCenteredSimple(x, y, width, height) {
        this.Draw(x - width / 2, y - height / 2, width, height);
    }
}

let tex_tbcafLogo = new Texture("https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/tbcaf-2025-website-header_orig.png");

///

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const tbcaf_tan = '#EFDBB2';
const tbcaf_light_brown = '#5D2A28';
const tbcaf_dark_brown = '#491A1C';
const tbcaf_bldark_brown = '#491A1C';
const tbcaf_brown = '#451B1C';

function DrawText(text, x, y, size) {
    let scaled_x = canvas.width / WIDTH;
    let scaled_y = canvas.height / HEIGHT;

    let font = (size * 48 * Math.min(scaled_x, scaled_y)) + 'px "Yanone Kaffeesatz"';
    context.font = font;
    context.textAlign = 'left';
    context.fillText(text, x * scaled_x, y * scaled_y);
}

function DrawTextCentered(text, x, y, size) {
    let scaled_x = canvas.width / WIDTH;
    let scaled_y = canvas.height / HEIGHT;

    let font = (size * 48 * Math.min(scaled_x, scaled_y)) + 'px "Yanone Kaffeesatz"';
    context.font = font;
    context.textAlign = 'center';
    context.fillText(text, x * scaled_x, y * scaled_y);
}

let lastTime = performance.now();
let timer = 0;
function draw() {
    let currentTime = performance.now();

    let delta = Math.max((currentTime - lastTime) / 1000, 1.0 / 1000.0);

    lastTime = performance.now();

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, tbcaf_light_brown);
    gradient.addColorStop(1, 'black');

    context.fillStyle = gradient;

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = tbcaf_tan;
    context.font = '48px "Yanone Kaffeesatz"';
    DrawTextCentered("Coffee Rush", WIDTH / 2, 80 + Math.sin(timer) * 5, 1.5);

    timer += delta;

    tex_tbcafLogo.DrawCentered(WIDTH - 80, 64, 128, 128, 0, 0, tex_tbcafLogo.image.width * 0.4, tex_tbcafLogo.image.height);
    
    requestAnimationFrame(draw);
}

draw();