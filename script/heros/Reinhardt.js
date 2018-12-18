/**
 *
 * @constructor
 */
function Reinhardt () {

    this.name = 'Reinhardt';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/reinhardt.png';


};

Reinhardt.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Reinhardt'] = new Reinhardt();