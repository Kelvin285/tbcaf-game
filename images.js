class Texture {
    image = new Image()
    constructor(src) {
        this.image.src = src;
    }
    Draw(context, x, y, width, height) {
        alert(this.image.src);
        context.drawImage(this.image, x, y);
    }
}

let tex_tbcafLogo = new Texture("https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/tbcaf-2025-website-header_orig.png");

let test = function drawImage() {
    alert("E");
}