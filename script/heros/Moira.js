/**
 *
 * @constructor
 */
function Moira () {

    this.name = 'Moira';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = './resources/players/moira.png';


};

Moira.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Moira'] = new Moira();