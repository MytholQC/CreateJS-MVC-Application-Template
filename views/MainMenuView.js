class MainMenuView{
    constructor(){
        this.htmlGameView = document.getElementById("html-game-menu-view").innerHTML;
    }
    
    display(){
        document.getElementsByTagName("body")[0].innerHTML = this.htmlGameView;

        this.startGameButton = document.getElementById("start-game");
        this.startGameButton.addEventListener("click", () => this.clickStartGameButton());
    }

    clickStartGameButton(){
        window.location.hash = "html-game-view";
    }

}