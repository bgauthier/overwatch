/**
 *
 * @constructor
 */
function Doomfist () {

    this.name = 'Doomfist';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/doomfist.png';


};

Doomfist.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Doomfist'] = new Doomfist();