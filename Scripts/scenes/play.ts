module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _player:objects.Player;
        private _background:objects.Background;
        private _island:objects.Island;
        private _enemy:objects.Enemy[];
        private _enemyNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._enemyNum; count++) {
                this._enemy.push(new objects.Enemy());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._player = new objects.Player();
            this._background = new objects.Background();
            this._island = new objects.Island();

            // creates an empty array of type Cloud
            this._enemy = new Array<objects.Enemy>();
            this._enemyNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._player.Update();
            this._background.Update();
            this._island.Update();

            managers.Collision.check(this._player, this._island);

            this._enemy.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._player, cloud);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._background);

            // adding the island to the scene
            this.addChild(this._island);

            // adding the plane to the scene
            this.addChild(this._player);

            // adding the cloud to the scene
            for (const cloud of this._enemy) {
                this.addChild(cloud);
            }

            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        }
    }
}