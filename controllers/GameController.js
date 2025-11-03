class GameController{
    constructor(){
        this.htmlLoading = document.getElementById("html-loading").innerHTML;

        this.gameView;

        //Get assets loaded by the id in the manifest file      e.g.: this.assets.myAsset
        this.assets = {}; //{manifest_id:{result:<img src="blob...">}};
    }

    preloadGameAssets(){
        console.log("chargement...");
        var preload = new createjs.LoadQueue();
        preload.loadManifest("game-assets/manifest.json");
        var loadingProgress = 0;
        var bar = document.getElementById("myBar");

        preload.on("progress", event => {
            //console.log(event);
            loadingProgress = event.progress * 100;
            bar.style.width = loadingProgress + "%";

        }, this);
        preload.on("fileload", event => {
            //console.log(event);
            this.assets[event.item.id] = {result: event.result};
        }, this);
        preload.on("complete", event => {
            //console.log(this.assets);

            //Pass assets to the Game Class so that CreateJS can render the game.
            this.gameView.assets = this.assets;

            window.location.hash = "html-game-menu-view";
        } ,this);
    }

    displayLoadScreen(){
        document.getElementsByTagName("body")[0].innerHTML = this.htmlLoading;
        this.preloadGameAssets();
    }

}