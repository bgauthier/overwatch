/**
 *
 * @constructor
 */
function McCree () {

    this.name = 'McCree';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/mccree.png';


};

McCree.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['McCree'] = new McCree();