/**
 *
 * @constructor
 */
function Bastion () {

    this.name = 'Bastion';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/bastion.png';


};

Bastion.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Bastion'] = new Bastion();