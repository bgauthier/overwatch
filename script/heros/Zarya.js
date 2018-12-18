/**
 *
 * @constructor
 */
function Zarya () {

    this.name = 'Zarya';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/zarya.png';


};

Zarya.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Zarya'] = new Zarya();