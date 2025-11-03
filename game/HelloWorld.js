class HelloWorld{
    constructor(scene, assets){
        this.scene = scene;
        this.assets = assets;

        this.bitmap = new createjs.Bitmap(this.assets.dvd.result);
        this.bitmap.scale = 0.2;
        this.bitmap.setBounds(0,0, this.bitmap.getBounds().width * this.bitmap.scale, this.bitmap.getBounds().height * this.bitmap.scale);
        this.bitmap.x = 1;
        this.bitmap.y = 1;

        this.scene.addChild(this.bitmap);

        this.direction = "bottom-right";
        this.speed = 2;
    }

    move(){
        switch (this.direction){
            case "bottom-right":
                this.bitmap.x += this.speed;
                this.bitmap.y += this.speed;
                break;
            case "top-right":
                this.bitmap.x += this.speed;
                this.bitmap.y -= this.speed;
                break;
            case "top-left":
                this.bitmap.x -= this.speed;
                this.bitmap.y -= this.speed;
                break;
            case "bottom-left":
                this.bitmap.x -= this.speed;
                this.bitmap.y += this.speed;
                break;
        }

    }
}