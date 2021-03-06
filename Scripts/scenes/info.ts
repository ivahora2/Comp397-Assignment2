//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module scenes {
    export class Info extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _infoLabel: objects.Label;
        private _infoLabel1: objects.Label;
        private _infoLabel2: objects.Label;
        private _infoLabel3: objects.Label;
        private _infoButton:objects.Button;
        private _background: objects.Background;
        private _backButton:objects.Button;
        

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._background = new objects.Background();
            this._infoButton = new objects.Button("infoButton",40,30,true);
            this._backButton = new objects.Button("BackButton",600,30,true);
            this._welcomeLabel = new objects.Label("You are in the minion world", "40px", "Consolas", "#000", 300, 80, true);
            this._infoLabel = new objects.Label("Level1- You, You the yellow minion ", "20px", "Consolas", "#000", 300, 120, true);
            this._infoLabel1 = new objects.Label(" Save yourself from the purple minions by scrolling up and down using mouse ", "15px", "Consolas", "#000", 320, 140, true);
            this._infoLabel2 = new objects.Label("Level2- You, You the yellow minion ", "20px", "Consolas", "#000", 300, 180, true);
            this._infoLabel3 = new objects.Label(" Save yourself from the purple minions who fire too by scrolling up and down using mouse ", "15px", "Consolas", "#000", 320, 200, true);
            

          

            this.Main();
        }

        public Update():void {
            
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }

        public Main():void {

            console.log(`Starting - INFO SCENE`);
            this.addChild(this._background);
            this.addChild(this._infoButton);
            this.addChild(this._welcomeLabel);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);
            this.addChild(this._infoLabel2);
            this.addChild(this._infoLabel3);
            this.addChild(this._backButton);
            
            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
           
        }
    }
}