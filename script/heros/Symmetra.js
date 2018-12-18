/**
 *
 * @constructor
 */
function Symmetra () {

    this.name = 'Symmetra';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/symmetra.png';


};

Symmetra.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Symmetra'] = new Symmetra();