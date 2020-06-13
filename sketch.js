var ball;
var database,position;
var gameState = 0,playerCount = 0;
var game,player,form;
var allPlayers;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.play();
    }
}
