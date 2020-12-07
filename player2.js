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

        if (this.x > canvas.width) {
            this.x = 0;
          }
      
          if (this.y > canvas.height) {
            this.y = 0;
          }
      
          if (this.x < 0) {
            this.x = canvas.width;
          }
      
          if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(directionplayer2) {
        switch (directionplayer2) {
            case "ArrowUp":
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
            break;
            case "ArrowRight":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
            break;
            case "ArrowDown":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
            break;
            case "ArrowLeft":
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
            break;
            
        }
    }
}