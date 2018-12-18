/**
 * Map KingsRow
 * @constructor
 */
function KingsRow() {

    this.name = 'King\'s Row';
    this.type = Overwatch.MAP_HYBRID;

    var oRound1Attack = new GameRound('Attack - Round 1');
    oRound1Attack.addPart('Point 1', Overwatch.MAPPOINT_CAPTURE, Overwatch.MODE_ATTACK);
    oRound1Attack.addPart('Point 2', Overwatch.MAPPOINT_ESCORT, Overwatch.MODE_ATTACK);
    oRound1Attack.addPart('Point 3', Overwatch.MAPPOINT_ESCORT, Overwatch.MODE_ATTACK);


    var oRound1Defense = new GameRound('Defence - Round 1');
    oRound1Defense.addPart('Point 1', Overwatch.MAPPOINT_CAPTURE, Overwatch.MODE_DEFENSE);
    oRound1Defense.addPart('Point 2', Overwatch.MAPPOINT_ESCORT, Overwatch.MODE_DEFENSE);
    oRound1Defense.addPart('Point 3', Overwatch.MAPPOINT_ESCORT, Overwatch.MODE_DEFENSE);

    this.rounds[this.rounds.length] = oRound1Attack;
    this.rounds[this.rounds.length] = oRound1Defense;

};

KingsRow.prototype = new GameMap();

// Add map to map list
Overwatch.maps['KingsRow'] = new KingsRow();