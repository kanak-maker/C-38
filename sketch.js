var formObj, playerCount, playerObj, gameObj, database, gameState;
function setup(){
createCanvas(500,500)
database = firebase.database();
gameObj = new Game();
gameObj.getGameState();
// if(gameState == 0){
    formObj = new Form();
    formObj.display();
    playerObj = new Player();
    playerObj.getPlayerCount();
    console.log(gameState,playerCount);
// }
}

function draw(){
if(playerCount == 2){
   gameObj.updateGameState(1);
}
if(playerCount == 2){//gameState == 1 ||
    clear();
    // gameObj.play();
}
}