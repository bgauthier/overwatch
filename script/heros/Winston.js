/**
 *
 * @constructor
 */
function Winston () {

    this.name = 'Winston';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/winston.png';


};

Winston.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Winston'] = new Winston();