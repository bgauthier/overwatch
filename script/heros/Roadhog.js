/**
 *
 * @constructor
 */
function Roadhog () {

    this.name = 'Roadhog';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/roadhog.png';


};

Roadhog.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Roadhog'] = new Roadhog();