function Player1() {
    this.x = -10;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.tail = [];


    this.draw = function () {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.location = { x: this.x, y: this.y };
        this.tail.push(this.location);


        //console.log(this.tail);
        //console.log(this.location);

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

    this.changeDirection = function (directionplayer1) {
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

    this.checkCollision = function (player2) {
        console.log("player1 collision check running");
        for (var i = 0; i < player2.tail; i++) {
            console.log("for Loop running");
            if (this.location === player2.tail[i]) {
                console.log("Game Over 3")

                return true;
            } else if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                console.log("Game Over 4")

                return true;
            } else {
                console.log("false");
            }

        }

    }
}