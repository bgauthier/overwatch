/**
 * Main overwatch object
 * @type {{}}
 */
var Overwatch = {

    GAMESTATUS_WIN : 'win',
    GAMESTATUS_LOST : 'lost',
    GAMESTATUS_TIED : 'tied',
    GAMESTATUS_CANCELED : 'canceled',

    MODE_ATTACK : 'attack',
    MODE_DEFENSE : 'defense',

    MAP_POINT : 'point',
    MAP_PAYLOAD : 'payload',
    MAP_HYBRID : 'hybrid',

    CATEGORY_DPS : 'dps',
    CATEGORY_TANK : 'tanks',
    CATEGORY_SUPPORT : 'support',

    maps : {},
    heros : {},
    ourTeam : {},
    otherTeam : {},

    initialize : function() {

        var s = '';
        for(var x in this.ourTeam) {



        }

        s = s + 'Hello world megann!!!';

        jQuery('#ourTeam').html(s);


    },

};