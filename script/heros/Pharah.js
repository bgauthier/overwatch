/**
 *
 * @constructor
 */
function Pharah () {

    this.name = 'Pharah';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/pharah.png';


};

Pharah.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Pharah'] = new Pharah();