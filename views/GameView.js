class GameView{
    constructor(game){
        this.htmlGameView = document.getElementById("html-game-view").innerHTML;
        this.htmlLoadingGame = document.getElementById("html-loading-game").innerHTML;
        this.game = game;
    }

    preloadGameAssets(){
        console.log("chargement...");
        var preload = new createjs.LoadQueue();
        preload.loadManifest("game-assets/manifest.json");
        var loadingProgress = 0;
        var bar = document.getElementById("myBar");

        preload.on("progress", event => {
            console.log(event);
            loadingProgress = event.progress * 100;
            bar.style.width = loadingProgress + "%";

        }, this);
        preload.on("fileload", event => {
            //console.log(event);
            /*if (event.item.id == "test")
                this.bitmap = new createjs.Bitmap(event.result);*/
        }, this);
        preload.on("complete", event => {
            console.log(event);
            console.log("image chargee");
            this.display();
        } ,this);
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