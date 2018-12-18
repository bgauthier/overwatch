/**
 *
 * @constructor
 */
function Genji () {

    this.name = 'Genji';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/genji.png';


};

Genji.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Genji'] = new Genji();