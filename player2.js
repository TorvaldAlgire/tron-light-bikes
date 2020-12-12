function Player2 () {
    this.x = canvas.width;
    this.y = canvas.height - 10;
    this.xSpeed = -scale * 1;
    this.ySpeed = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.location = { x: this.x, y: this.y};
        this.tail.push(this.location);

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

    this.checkCollision = function (player1) {
        for (var i = 0; i < player1.tail; i++) {
            if (this.x === player1.tail[i].x && this.y === player1.tail[i].y) {
                console.log("Game Over 1")

                return true;
        } else if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
            console.log("Game Over 2")
            
            return true;
            } else {
                return false;
            }

        }
        
    }
}