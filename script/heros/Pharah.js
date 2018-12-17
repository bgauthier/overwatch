/**
 *
 * @constructor
 */
function Pharah () {

    this.name = 'Pharah';
    this.type = Overwatch.CATEGORY_DPS;
    this.icon = '/resources/players/pharah.png';

    this.courrir = function() {
        console.log(this.name + ' ne cours pas elle vole et a ' + Object.keys(this.abilities).length + ' abilités');
    };

};

Pharah.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Pharah'] = new Pharah();