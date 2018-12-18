/**
 *
 * @constructor
 */
function Hanzo () {

    this.name = 'Hanzo';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/hanzo.png';


};

Hanzo.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Hanzo'] = new Hanzo();