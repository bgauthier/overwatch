/**
 *
 * @constructor
 */
function Mercy () {

    this.name = 'Mercy';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = './resources/players/mercy.png';


};

Mercy.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Mercy'] = new Mercy();