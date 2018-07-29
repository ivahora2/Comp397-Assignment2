module scenes {
    export class Info extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _infoButton:objects.Button;
        private _background: objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

          

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
            

           
        }
    }
}