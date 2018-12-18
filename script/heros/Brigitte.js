/**
 *
 * @constructor
 */
function Brigitte () {

    this.name = 'Brigitte';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = './resources/players/missing.png';


};

Brigitte.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Brigitte'] = new Brigitte();