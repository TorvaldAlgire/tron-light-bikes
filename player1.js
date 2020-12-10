function Player1 () {
    this.x = -10;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {
        for (var i = -1; i < this.tail.length; i++) {
            this.tail[i] = { x: this.x, y: this.y };
        }

        

        console.log(this.tail);


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

    this.changeDirection = function(directionplayer1) {
        switch (directionplayer1) {
            case "w":
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
            break;
            case "d":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
            break;
            case "s":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
            break;
            case "a":
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
            break;
        }
    }
}