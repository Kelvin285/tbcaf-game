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
    requestAnimationFrame(draw);
}

draw();