/**
 *
 * @constructor
 */
function DVa () {

    this.name = 'D.Va';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/dva.png';


};

DVa.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['DVa'] = new DVa();