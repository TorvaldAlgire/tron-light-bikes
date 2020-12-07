const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const col = canvas.width /scale;
var player1;
var player2;

(function setUp() {
    player1 = new Player1();
    player2 = new Player2();

    window.setInterval(() => {
        player1.update();
        player1.draw();
        player2.update();
        player2.draw();
        

    }, 250);
}());

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key;
    player1.changeDirection(direction);
    player2.changeDirection(direction);
}));