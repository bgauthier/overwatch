function GameRound(sName) {

    this.name = sName;
    this.parts = [];

    this.addPart = function(sName, nType, nMode) {

        var oPart = new GameMapPart();

        oPart.name = sName;
        oPart.type = nType;
        oPart.mode = nMode;

        this.parts[this.parts.length] = oPart;
    };

    this.renderParts = function() {

        var s = '<h6>Round Parts</h6>';
        s = s + '<table class="table table-bordered">';
        s = s + '   <tr>';

        for(var x in this.parts) {
            var sAction = '';
            if (this.parts[x].type == Overwatch.MAPPOINT_CAPTURE) {
                if (this.parts[x].mode == Overwatch.MODE_ATTACK) {
                    sAction = 'Capture - ';
                } else {
                    sAction = 'Defend - ';
                }
            } else {
                if (this.parts[x].mode == Overwatch.MODE_ATTACK) {
                    sAction = 'Escort - ';
                } else {
                    sAction = 'Escort - ';
                }
            }

            s = s + '<td><input type="checkbox" />&nbsp;' + sAction + this.parts[x].name + (this.parts[x].mode == Overwatch.MODE_ATTACK ? ' - taken' : ' - lost') + '</td>';
        }

        s = s + '   </tr>';
        s = s + '</table>';

        return s;

    };


};