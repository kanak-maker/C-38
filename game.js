class Game{
    constructor(){

    }
    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
            console.log(gameState);
        })
    }
    updateGameState(count){
        database.ref('/').update({
            gameState : count
        });
    }
    play(){
        formObj.hide();
        text("Game Start",150,200);
    }
}