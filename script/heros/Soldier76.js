/**
 *
 * @constructor
 */
function Soldier76 () {

    this.name = 'Soldier 76';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = '/resources/players/soldier76.png';

    /**
     * Return array of player names this player is a good conter for
     * @returns {Array}
     */
    this.getIsCounterFor = function() {
        return ['Pharah'];
    };

};

Soldier76.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Soldier76'] = new Soldier76();