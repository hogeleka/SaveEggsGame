var transitionToComboState = {
    create: function(){
        this.comboTweenDuration = 0;

        gameController.addBackground();

        this.showComboModeAnimation();

        game.time.events.loop(300, function(){
            if (this.comboTweenDuration >= 1.5){
                this.game.state.start('combo');
            } else{
                this.comboTweenDuration ++;
            }
        }, this);

    },

    showComboModeAnimation: function(){
        var comboTextFormat = gameController.createFormatting("bold 200px Times", "#00FF00");
        var comboText = "COMBO";
        gameController.createTweenAnimation(canvasWidth/2, canvasHeight/2, comboText, comboTextFormat, 500);
    }
};