/**
 *
 * @constructor
 */
function Lucio () {

    this.name = 'Lucio';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = './resources/players/lucio.png';


};

Lucio.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Lucio'] = new Lucio();