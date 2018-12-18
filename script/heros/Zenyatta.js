/**
 *
 * @constructor
 */
function Zenyatta () {

    this.name = 'Zenyatta';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = './resources/players/zenyatta.png';


};

Zenyatta.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Zenyatta'] = new Zenyatta();