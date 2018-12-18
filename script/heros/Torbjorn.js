/**
 *
 * @constructor
 */
function Torbjorn () {

    this.name = 'Torbjorn';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/torbjorn.png';


};

Torbjorn.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Torbjorn'] = new Torbjorn();