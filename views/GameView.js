class GameView{
    constructor(){
        this.html = document.getElementById("html-game-view").innerHTML;
        this.initialized = false;
        
        this.controller;
        //Get assets loaded by the id in the manifest file      e.g.: this.assets.myAsset
        this.assets; //{manifest_id:{result:<img src="blob...">}};
    }
    
    display(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/RE_76DW9Lro/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCBfPhL6ugtM-W3BgjY3hXG8Pp4NA')";
        this.canvas = document.getElementsByTagName("canvas")[0];

        const ratio = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth * ratio;
        this.canvas.height = window.innerHeight * ratio;
        //this.canvas.style.width = '100vw';
        //this.canvas.style.height = '100vh';
        
        this.scene = new createjs.Stage(this.canvas);
        this.scene.scale = ratio;
        this.scene.setBounds(0,0, this.canvas.width, this.canvas.height);

        //createjs.Ticker.addEventListener("tick", event => this.handleTick(event));

        //this.bitmap = new createjs.Bitmap("game-assets/sheet_tanks.png");
        //this.bitmap.x = 0;
        //this.scene.addChild(this.bitmap);
    }
    
    startGame(){
        createjs.Ticker.addEventListener("tick", event => this.handleTick(event));
        createjs.Ticker.framerate = 120;
    }

    handleTick(event) {
        if (!this.initialized){
            //this.scene.addChild(this.bitmap);
            this.pause = false;
            this.game = new Game(this.scene, this.assets);
            this.initialized = true;
        }
        else if (!this.pause){
            this.game.update();

            this.scene.update();
        }




        //console.log(this.bitmap.x);
    }
}