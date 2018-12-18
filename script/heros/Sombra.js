/**
 *
 * @constructor
 */
function Sombra () {

    this.name = 'Sombra';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/sombra.png';


};

Sombra.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Sombra'] = new Sombra();