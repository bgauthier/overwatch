/**
 *
 * @constructor
 */
function Junkrat () {

    this.name = 'Junkrat';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/junkrat.png';


};

Junkrat.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Junkrat'] = new Junkrat();