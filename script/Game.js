/**
 * Game
 * @constructor
 */
function Game() {

    this.map = null;
    this.status = null;
    this.isOvertime = false; // Overtime
    this.rounds =  [];
    this.mainTeam = {};
    this.opponentsTeam = {};
    this.startTime = null;
    this.endTime = null;
    this._refreshTimer = null;

    this.initialize = function() {

        for(var i = 1; i<=6; i++) {
            this.mainTeam['Player' + i] = new Player(i, Overwatch.TEAM_MAIN);
            this.opponentsTeam['Player' + i] = new Player(i, Overwatch.TEAM_OPPONENTS);
        }

        var sMainTeam = '';
        for(var x in this.mainTeam) {
            sMainTeam = sMainTeam + this.mainTeam[x].renderPlayerInfo();
        }

        //sMainTeam = sMainTeam + '<div class="row">';
        for(var i = 1; i<=6; i++) {
            sMainTeam = sMainTeam + '   <div class="col-md-2">';
            sMainTeam = sMainTeam + '       <img id="' + Overwatch.TEAM_MAIN + 'Icon' + i + '" src="./resources/players/missing.png" class="img-responsize img-thumbnail"/>';
            sMainTeam = sMainTeam + '   </div>';
        }
        //sMainTeam = sMainTeam + '</div>';

        jQuery('#' + Overwatch.TEAM_MAIN).html(sMainTeam);



        var sOpponentTeam = '';
        for(var x in this.opponentsTeam) {
            sOpponentTeam = sOpponentTeam + this.opponentsTeam[x].renderPlayerInfo();
        }

        for(var i = 1; i<=6; i++) {
            sOpponentTeam = sOpponentTeam + '   <div class="col-md-2">';
            sOpponentTeam = sOpponentTeam + '       <img id="' + Overwatch.TEAM_OPPONENTS + 'Icon' + i + '" src="./resources/players/missing.png" class="img-responsize img-thumbnail"/>';
            sOpponentTeam = sOpponentTeam + '   </div>';
        }

        jQuery('#' + Overwatch.TEAM_OPPONENTS).html(sOpponentTeam);

        // Hook user selection control
        jQuery('.ctrl-hero').on('change', function() {

            var sImgID = jQuery(this).attr('team') + 'Icon' + jQuery(this).attr('playerindex');
            jQuery('#' + sImgID).attr('src', Overwatch.heros[jQuery(this).val()].icon);
            if (jQuery(this).attr('team') == Overwatch.TEAM_MAIN) {
                Overwatch.game.mainTeam['Player' + jQuery(this).attr('playerindex')].setHero(jQuery(this).val()) ;
            } else {
                Overwatch.game.opponentsTeam['Player' + jQuery(this).attr('playerindex')].setHero(jQuery(this).val());
            }


        });

        jQuery('.ctrl-hero-name').on('change', function() {
            if (jQuery(this).attr('team') == Overwatch.TEAM_MAIN) {
                Overwatch.game.mainTeam['Player' + jQuery(this).attr('playerindex')].name = jQuery(this).val();
            } else {
                Overwatch.game.opponentsTeam['Player' + jQuery(this).attr('playerindex')].name = jQuery(this).val();
            }
        });


        // Enable game buttons
        jQuery('.ctrl-game').removeAttr('disabled');
        jQuery('#btnNewGame').attr('disabled', true).hide();
        jQuery('#btnJoinGame').attr('disabled', true).hide();
        jQuery('#gameInfo').html('Game code : ' + this.gameCode).show();

        jQuery('#gameMap').val('');

        this._refreshTimer = setInterval(Overwatch.refreshWarnings, 1000);

    };

    this.setMap = function(sMapName) {

        this.map = Overwatch.maps[sMapName];
        this.map.initialize();

    };

    this.addRound = function() {

        var oRound = new Round();

        this.rounds[this.rounds.length] = oRound;

    };

    /**
     * Game is won
     */
    this.won = function() {

        var currentGame = this;

        bootbox.confirm('Game is won?', function(result) {
            if (result) {
                currentGame.status = Overwatch.GAMESTATUS_WON;
                jQuery('.btn-game').attr('disabled', true);
                jQuery('#btnNewGame').removeAttr('disabled');
                clearInterval(this._refreshTimer);
            }
        });

    };

    /**
     * Game is lost
     */
    this.lost = function() {

        var currentGame = this;

        bootbox.confirm('Game is lost?', function(result) {
            if (result) {
                currentGame.status = Overwatch.GAMESTATUS_LOST;
                jQuery('.btn-game').attr('disabled', true);
                jQuery('#btnNewGame').removeAttr('disabled');
                clearInterval(this._refreshTimer);
            }
        });

    };

    /**
     * Game is tied
     */
    this.tied = function() {

        var currentGame = this;

        bootbox.confirm('Game is tied?', function(result) {
            if (result) {
                currentGame.status = Overwatch.GAMESTATUS_TIED;
                jQuery('.btn-game').attr('disabled', true);
                jQuery('#btnNewGame').removeAttr('disabled');
                clearInterval(this._refreshTimer);
            }
        });


    };

    /**
     * Game was canceled #leaver
     */
    this.cancel = function() {

        var currentGame = this;

        bootbox.confirm('Game is canceled?', function(result) {
            if (result) {
                currentGame.status = Overwatch.GAMESTATUS_CANCELED;
                jQuery('.btn-game').attr('disabled', true);
                jQuery('#btnNewGame').removeAttr('disabled');
                clearInterval(this._refreshTimer);
            }
        });

    };


    this.startRound = function() {
        jQuery('.hide-play').hide();
        jQuery('#rowRounds').removeClass('col-md-12').addClass('col-md-6');
        jQuery('#rowWarnings').show();

    };

    this.endRound = function() {

        jQuery('.hide-play').show();
        jQuery('#rowRounds').removeClass('col-md-6').addClass('col-md-12');
        jQuery('#rowWarnings').hide();



    };


};