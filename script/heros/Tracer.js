/**
 *
 * @constructor
 */
function Tracer () {

    this.name = 'Tracer';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = './resources/players/tracer.png';


};

Tracer.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Tracer'] = new Tracer();