/**
 *
 * @constructor
 */
function WreckingBall () {

    this.name = 'Wrecking Ball';
    this.type = Overwatch.CATEGORY_TANK;
    this.icon = './resources/players/missing.png';


};

WreckingBall.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['WreckingBall'] = new WreckingBall();