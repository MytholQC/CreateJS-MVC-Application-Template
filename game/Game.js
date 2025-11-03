class Game{
    constructor(scene, assets){
        this.scene = scene;
        this.assets = assets;

        this.initialize();
    }
    
    initialize(){
        this.helloWorld = new HelloWorld(this.scene, this.assets);
    }

    update(){
        //console.log(this.helloWorld.bitmap.x + "\n" + this.helloWorld.bitmap.y);
        //console.log(this.scene.getBounds().width);

        //left bound
        if (this.helloWorld.bitmap.x <= 0){
            //console.log("left Bound");
            if (this.helloWorld.direction == "top-left")
                this.helloWorld.direction = "top-right";
            else this.helloWorld.direction = "bottom-right";
        }

        //right bound
        if (this.helloWorld.bitmap.x + this.helloWorld.bitmap.getBounds().width >= this.scene.getBounds().width){
            //console.log("right Bound");
            if (this.helloWorld.direction == "top-right")
                this.helloWorld.direction = "top-left";
            else this.helloWorld.direction = "bottom-left";
        }

        //top bound
        if (this.helloWorld.bitmap.y <= 0){
            //console.log("top Bound");
            if (this.helloWorld.direction == "top-left")
                this.helloWorld.direction = "bottom-left";
            else this.helloWorld.direction = "bottom-right";
        }       
        //bottom bound
        if (this.helloWorld.bitmap.y + this.helloWorld.bitmap.getBounds().height >= this.scene.getBounds().height){
            //console.log("bottom Bound");
            if (this.helloWorld.direction == "bottom-right")
                this.helloWorld.direction = "top-right";
            else this.helloWorld.direction = "top-left";
        }

        this.helloWorld.move();
    }
}