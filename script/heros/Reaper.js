/**
 *
 * @constructor
 */
function Reaper () {

    this.name = 'Reaper';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/reaper.png';


};

Reaper.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Reaper'] = new Reaper();