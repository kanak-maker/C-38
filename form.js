class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }
    display(){
        
        this.title.html("CARS");
        this.title.position(200,50);
        this.input.position(170,150);
        this.button.position(250,250);
        this.button.mousePressed(()=>{
        playerObj.name = this.input.value();
        this.greeting.html("Hello "+playerObj.name);
        this.greeting.position(170,200);
        this.input.hide();
        this.button.hide();
        playerCount = playerCount + 1;
        console.log(playerCount);
        playerObj.updatePlayerCount(playerCount);
        })
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}