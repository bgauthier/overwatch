/**
 * GameMap object
 * @constructor
 */
function GameMap() {

    this.name = null;
    this.type = null;
    this.location = null;
    this.terrain = null;
    this.rounds = [];

    this.initialize = function() {
        this.renderRounds();
    };

    this.renderRounds = function() {
        if (this.rounds == null) {
            jQuery('#mapRounds').html('<div class="col-md-12"><div class="alert alert-danger">Map ' + this.name + ' missing rounds definition</div></div>');
        } else {

            var s = '<table class="table table-bordered">';
            for(var x in this.rounds) {
                s = s + '<tr>';
                s = s + '   <td>' + this.rounds[x].name + '</td>';
                s = s + '   <td>' + this.rounds[x].renderParts() + '</td>';
                s = s + '</tr>';
            }
            s = s + '</table>';

            jQuery('#mapRounds').html('<div class="col-md-12">' + s + '</div>');

        }

    };

};