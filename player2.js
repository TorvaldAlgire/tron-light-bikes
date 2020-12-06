function Player2 () {
    this.x = canvas.width;
    this.y = canvas.height - 10;
    this.xSpeed = -scale * 1;
    this.ySpeed = 0;

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}