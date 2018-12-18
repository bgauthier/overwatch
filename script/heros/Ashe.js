/**
 *
 * @constructor
 */
function Ashe () {

    this.name = 'Ashe';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/ashe.png';


};

Ashe.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Ashe'] = new Ashe();