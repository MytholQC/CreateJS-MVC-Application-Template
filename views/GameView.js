class GameView{
    constructor(game){
        this.htmlGameView = document.getElementById("html-game-view").innerHTML;
        this.htmlLoadingGame = document.getElementById("html-loading-game").innerHTML;
        this.game = game;
    }

    preloadGameAssets(){
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", event => {
            console.log(event.result);
            window.location.hash = "game-view";
        });
        preload.loadFile("game-assets/sheet_tanks.png");
    }

    displayLoadScreen(){
        document.getElementsByTagName("body")[0].innerHTML = this.htmlLoadingGame;
        this.preloadGameAssets();
        var preload = new createjs.LoadQueue();
    }
    display(){
        document.getElementsByTagName("body")[0].innerHTML = this.htmlGameView;

    }

    startGameButton(){
        console.log("startGame");
        window.location.hash = "html-game";
    }

}