/**
 *
 * @constructor
 */
function Mei () {

    this.name = 'Mei';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/mei.png';


};

Mei.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Mei'] = new Mei();