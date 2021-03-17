class Player{
    constructor(){
    this.name = null;
    }
    getPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updatePlayerCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(){
        var playerIndex = "players/player"+playerCount;
        database.ref(playerIndex).set({
            name : this.name
        })
    }
}