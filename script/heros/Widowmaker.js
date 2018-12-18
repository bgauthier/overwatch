/**
 *
 * @constructor
 */
function Widowmaker () {

    this.name = 'Windowmaker';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/widowmaker.png';


};

Widowmaker.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Widowmaker'] = new Widowmaker();