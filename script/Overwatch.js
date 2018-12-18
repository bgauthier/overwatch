/**
 * Main overwatch object
 * @type {{}}
 */
var Overwatch = {

    SERVER_URL : 'http://localhost:3000',

    GAMESTATUS_WON : 'won',
    GAMESTATUS_LOST : 'lost',
    GAMESTATUS_TIED : 'tied',
    GAMESTATUS_CANCELED : 'canceled',

    MODE_ATTACK : 'attack',
    MODE_DEFENSE : 'defense',

    MAP_ASSAULT : 'Assault',
    MAP_ESCORT : 'Escort',
    MAP_HYBRID : 'Hybrid',
    MAP_CONTROL : 'Control',

    MAPPOINT_CAPTURE : 'capture',
    MAPPOINT_ESCORT : 'escort',

    CATEGORY_DPS : 'DPS',
    CATEGORY_TANK : 'Tanks',
    CATEGORY_SUPPORT : 'Support',

    TEAM_MAIN : 'teamMain',
    TEAM_OPPONENTS : 'teamOpponents',

    maps : {},
    heros : {},
    game: null,
    warnings : [],

    startGame : function() {


        bootbox.confirm('Start a new game?', function(result) {
           if (result) {

               jQuery.ajax({
                   url: Overwatch.SERVER_URL + '/Game/new',
                   method: 'get',
                   data : {
                   },
                   success : function(data, status, xhr) {
                       console.log(data);
                       var r = JSON.parse(data);
                       if (r.status == 'ERROR') {
                           alert('Error in request');
                       } else {
                           Overwatch.game = new Game();
                           Overwatch.game.gameCode = r.gameCode;
                           Overwatch.game.initialize();
                       }
                   }
               });


           }
        });




    },

    joinGame : function() {

        bootbox.prompt('Enter game code', function(result) {

            if (result != '') {

                jQuery.ajax({
                    url: Overwatch.SERVER_URL + '/Game/join',
                    method: 'post',
                    data : {
                        gameCode : result,
                    },
                    success : function(data, status, xhr) {
                        console.log(data);
                        var r = JSON.parse(data);
                        if (r.status == 'ERROR') {
                            alert('Error in request');
                        } else {
                            Overwatch.game = new Game();
                            Overwatch.game.gameCode = r.gameCode;
                            Overwatch.game.initialize();
                        }
                    }
                });

            }

        });

    },

    endGame : function() {


        this.game = null;

    },

    initialize : function() {

        this._loadMaps();
        this._loadTeams();

    },

    getTanks : function() {
       return this.getHeroByType(Overwatch.CATEGORY_TANK);
    },

    getSupport : function() {
        return this.getHeroByType(Overwatch.CATEGORY_SUPPORT);
    },

    getDPS : function() {
        return this.getHeroByType(Overwatch.CATEGORY_DPS);
    },

    getHeroByType : function(nType) {

        var r = {};
        for(var x in this.heros) {
            if (this.heros[x].type == nType) {
                r[x] = x;
            }
        }
        return r;


    },

    _loadTeams : function() {

        var s = '';

        for(var x in this.heros) {
            s = s + '<div class="col-md-2" style="text-align:center;">';
            s = s + '   <a href="#"><img src="' + this.heros[x].icon + '" class="img-fluid img-thumbnail" style="width:75%;"/></a><br/>';
            s = s + '   <span style="font-size:10pt;">' + this.heros[x].name + '</span>';
            s = s + '</div>';
        }

        //jQuery('#ourTeam').html(s);

    },


    _loadMaps : function() {

        /**
         * Load map select
         * @type {null}
         */
        var nCurrentMapType = null;

        var sOption = '<option value="">';
        sOption = sOption + '(Select a map)';
        sOption = sOption + '</option>';

        jQuery('#gameMap').append(sOption);


        for(var x in this.maps) {

            if (nCurrentMapType != this.maps[x].type) {

                if (nCurrentMapType !== null) {
                    jQuery('#gameMap').append('</optgroup>');
                }
                jQuery('#gameMap').append('<optgroup label="' + this.maps[x].type + '">');
                nCurrentMapType = this.maps[x].type;
            }


            var sOption = '<option value="' + x + '">';
            sOption = sOption + this.maps[x].name;
            sOption = sOption + '</option>';

            jQuery('#gameMap').append(sOption);

        }

        if (nCurrentMapType !== null) {
            jQuery('#gameMap').append('</optgroup>');
        }

        jQuery('#gameMap').on('change', function() {

            Overwatch.game.setMap(jQuery('#gameMap').val());

        });

    },

    toggleTeam : function(nTeam) {

        jQuery('.hide-play.' + nTeam).toggle();

    },

    refreshWarnings : function() {

        Overwatch.warnings = [];

        nSupportCount = 0;
        nDPSCount = 0;
        nTankCount = 0;

        for(var x in Overwatch.game.mainTeam) {
            if (Overwatch.game.mainTeam[x].currentHero == null) {
                Overwatch.warnings[Overwatch.warnings.length] = {
                    type : 'info',
                    message : 'Player ' + Overwatch.game.mainTeam[x].name + ' has not selected an hero',
                };
            } else {
                if (Overwatch.heros[Overwatch.game.mainTeam[x].currentHero].type == Overwatch.CATEGORY_DPS) {
                    nDPSCount++;
                } else if (Overwatch.heros[Overwatch.game.mainTeam[x].currentHero].type == Overwatch.CATEGORY_TANK) {
                    nTankCount++;
                } else if (Overwatch.heros[Overwatch.game.mainTeam[x].currentHero].type == Overwatch.CATEGORY_SUPPORT) {
                    nSupportCount++;
                }
            }
        }

        Overwatch._checkTeamComposition(nSupportCount, nDPSCount, nTankCount);


        /**
         * Render warnings
         * @type {string}
         */

        var s = '';
        for(var i = 0; i < Overwatch.warnings.length; i++) {
            s = s + '<div class="col-md-6"><div class="alert alert-' + Overwatch.warnings[i].type + '">' + Overwatch.warnings[i].message + '</div></div>';
        }

        jQuery('#gameWarnings').html(s);

    },

    _checkTeamComposition : function(nSupportCount, nDPSCount, nTankCount) {

        /**
         * Check if we have support players
         */
        if (nSupportCount == 0) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'No support heros',
            };
        } else if(nSupportCount == 1) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'warning',
                message : 'Only one support hero',
            };
        } else if(nSupportCount > 2) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'More than two support heros',
            };
        }

        if (nDPSCount == 0) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'No DPS heros',
            };
        } else if(nDPSCount == 1) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'warning',
                message : 'Only one DPS hero',
            };
        } else if(nDPSCount > 2) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'More than two DPS heros',
            };
        }

        if (nTankCount == 0) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'No tank heros',
            };
        } else if (nTankCount == 1) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'warning',
                message : 'Only one tank hero',
            };
        } else if(nTankCount > 2) {
            Overwatch.warnings[Overwatch.warnings.length] = {
                type : 'danger',
                message : 'More than two tank heros',
            };
        }

    },


};