/**
 *
 * @constructor
 */
function Orisa () {

    this.name = 'Orisa';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/orisa.png';


};

Orisa.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Orisa'] = new Orisa();