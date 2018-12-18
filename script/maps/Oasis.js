/**
 * Map Oasis
 * @constructor
 */
function Oasis() {

    this.name = 'Oasis';
    this.type = Overwatch.MAP_CONTROL;

    var oRound1 = new GameRound('Control - Round 1');
    oRound1.addPart('Control point', Overwatch.MAPPOINT_CAPTURE, Overwatch.MODE_ATTACK);

    var oRound2 = new GameRound('Control - Round 2');
    oRound2.addPart('Control point', Overwatch.MAPPOINT_CAPTURE, Overwatch.MODE_ATTACK);

    var oRound3 = new GameRound('Control - Round 3');
    oRound3.addPart('Control point', Overwatch.MAPPOINT_CAPTURE, Overwatch.MODE_ATTACK);



    this.rounds[this.rounds.length] = oRound1;
    this.rounds[this.rounds.length] = oRound2;
    this.rounds[this.rounds.length] = oRound3;

};

Oasis.prototype = new GameMap();

// Add map to map list
Overwatch.maps['Oasis'] = new Oasis();