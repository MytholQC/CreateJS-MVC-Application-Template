class Game{
    constructor(){
        this.html = document.getElementById("html-game").innerHTML;
        //this.image = new Image();
        this.images = [{id:"test", src:"game-assets/sheet_tanks.png"}];
        //this.image.addEventListener("load", evenementload => this.creerSprite(evenementload));
        this.preloadGameAssets();
    }
    preloadGameAssets(){
        console.log("chargement...");
        var preload = new createjs.LoadQueue();
        preload.loadManifest("game-assets/manifest.json");

        preload.on("fileload", event => {
            console.log(event);
            if (event.item.id == "test")
                this.bitmap = new createjs.Bitmap(event.result);
        }, this);
        preload.on("complete", event => {
            //console.log(event);
            console.log("image chargee");
            this.estCharge = true;
        } ,this);
    }
    creerSprite(evenementload){
        this.bitmap = new createjs.Bitmap(this.image);
    }
    
    display(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.style.width = '100vw';
        this.canvas.style.height = '100vh';
        
        this.scene = new createjs.Stage(this.canvas);
        
        //createjs.Ticker.addEventListener("tick", event => this.handleTick(event));

        //this.bitmap = new createjs.Bitmap("game-assets/sheet_tanks.png");
        //this.bitmap.x = 0;
        //this.scene.addChild(this.bitmap);

        
    }
    
    startGame(){
        createjs.Ticker.addEventListener("tick", event => this.handleTick(event));
    }

    handleTick(event) {
        if (this.estCharge){
            this.scene.addChild(this.bitmap);
            this.bitmap.x = 1;
            this.scene.update();
            //console.log(this.bitmap.x);
        }
    }
}