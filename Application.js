class Application{
    constructor(window, gameView, game){
        this.window = window;
        this.game = game;
        this.gameView = gameView;

        this.window.addEventListener("hashchange", () => this.naviguer());
        this.naviguer();
        
        //document.addEventListener("deviceready", () => this.initialiserNavigation(), false);
    }
    
    /*initialiserNavigation(){
        console.log("Application-->initialiserNavigation");

        //this.window.addEventListener("hashchange", () => this.naviguer());

        setTimeout(() => this.naviguer(), 3000);
    }*/

    naviguer(){
        let hash = this.window.location.hash;
        if(!hash){
            this.gameView.displayLoadScreen();
            //this.vueListeCarte.initialiser(this.carteDAO.lister());
            //this.vueListeCarte.afficher();
        } else  if (hash.match(/^#game-view/)){
            this.gameView.display()
        } else if (hash.match(/^#html-game/)){
            this.game.display();
            this.game.startGame();
        }
    }

}

var application = new Application(window, new GameView(), new Game());