class GameView{
    constructor(){
        this.html = document.getElementById("html-game-view").innerHTML;

        this.controller;
        //Get assets loaded by the id in the manifest file      e.g.: this.assets.myAsset
        this.assets; //{manifest_id:{result:<img src="blob...">}};
    }
    
    display(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.style.width = '100vw';
        this.canvas.style.height = '100vh';
        
        this.scene = new createjs.Stage(this.canvas);

        this.bitmap = new createjs.Bitmap(this.assets.test.result);
        
        //createjs.Ticker.addEventListener("tick", event => this.handleTick(event));

        //this.bitmap = new createjs.Bitmap("game-assets/sheet_tanks.png");
        //this.bitmap.x = 0;
        //this.scene.addChild(this.bitmap);

        
    }
    
    startGame(){
        createjs.Ticker.addEventListener("tick", event => this.handleTick(event));
    }

    handleTick(event) {
        this.scene.addChild(this.bitmap);
        this.bitmap.x = 1;
        this.scene.update();
        //console.log(this.bitmap.x);
    }
}