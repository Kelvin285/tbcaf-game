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

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const tbcaf_brown = '#451B1C';
const tbcaf_tan = '#EFDBB2'

function draw() {
    context.fillStyle = tbcaf_brown;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = tbcaf_tan;
    context.font = '48px "Yanone Kaffeesatz"';
    context.fillText('Hello, world!', 50, 100);
    
    requestAnimationFrame(draw);
}

draw();