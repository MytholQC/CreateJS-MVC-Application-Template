class Application{
    constructor(window, gameView, MainMenuView, gameController){
        this.window = window;
        this.gameController = gameController;
        this.gameView = gameView;
        this.mainMenuView = MainMenuView;

        this.gameView.controller = this.gameController;
        this.gameController.gameView = this.gameView;



        this.window.addEventListener("hashchange", () => this.navigate());
        this.navigate();
        

        /*  This part is to wait for the app to load in a Apache Cordova mobile app.
            If you need it, remove "this.window.addEventListener("hashchange", () => this.naviguer());" and "this.naviguer();" in the contructor().*/
        //document.addEventListener("deviceready", () => this.initialiserNavigation(), false);
    }
    
    /*initialiserNavigation(){
        this.window.addEventListener("hashchange", () => this.naviguer());
        this.naviguer();
    }*/

    navigate(){
        let hash = this.window.location.hash;
        if(!hash){
            this.gameController.displayLoadScreen();
            //this.vueListeCarte.initialiser(this.carteDAO.lister());
            //this.vueListeCarte.afficher();
        } else  if (hash.match(/^#html-game-menu-view/)){
            this.mainMenuView.display()
        } else if (hash.match(/^#html-game-view/)){
            this.gameView.display();
            this.gameView.startGame();
        }
    }

}

new Application(window, new GameView(), new MainMenuView(),  new GameController());