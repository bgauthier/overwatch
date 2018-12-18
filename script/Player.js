function Player(nIndex, nTeam) {

    this.name = 'Player' + nIndex;
    this.index = nIndex;
    this.team = nTeam;
    this.isLeaver = false;
    this.currentHero = null;
    this.heroHistory = [];

    /**
     * Select player hero
     * @param sHeroName
     */
    this.setHero = function(sHeroName) {
        this.currentHero = sHeroName;
        this.heroHistory[this.heroHistory.length] = sHeroName;
    };


    this.renderPlayerInfo = function(nPlayerIndex, nTeam) {

        var s = '';

        if (nPlayerIndex == undefined) {
            nPlayerIndex = this.index;
        }

        if (nTeam == undefined) {
            nTeam = this.team;
        }


        s = s + '<div class="col-md-3 hide-play ' + nTeam + '">';
        s = s + '    <div class="form-group">';
        s = s + '    <label for="' + nTeam + 'P' + nPlayerIndex + '">Player ' + nPlayerIndex + ' : </label>';
        s = s + '        <input id="' + nTeam + 'P' + nPlayerIndex + '" playerindex="' + nPlayerIndex + '" team="' + nTeam + '" class="form-control ctrl-hero-name" type="text" value="Player ' + nPlayerIndex + '"/>';
        s = s + '    </div>';
        s = s + '    </div>';
        s = s + '<div class="col-md-3 hide-play ' + nTeam + '">';
        s = s + '    <div class="form-group">';
        s = s + '    <label for="' + nTeam + 'P' + nPlayerIndex + 'Hero">Player ' + nPlayerIndex + ' Hero : </label>';
        s = s + '        <select id="' + nTeam + 'P' + nPlayerIndex + 'Hero" playerindex="' + nPlayerIndex + '" team="' + nTeam + '" class="form-control ctrl-hero">';
        s = s + '           <option value="">(Select Hero)</option>';


        s = s + '<optgroup label="' + Overwatch.CATEGORY_DPS + '">';
        for(var h in Overwatch.getDPS()) {
            s = s + '<option value="' + h + '">' + Overwatch.heros[h].name + '</option>';
        }
        s = s + '</optgroup>';

        s = s + '<optgroup label="' + Overwatch.CATEGORY_TANK + '">';
        for(var h in Overwatch.getTanks()) {
            s = s + '<option value="' + h + '">' + Overwatch.heros[h].name + '</option>';
        }
        s = s + '</optgroup>';

        s = s + '<optgroup label="' + Overwatch.CATEGORY_SUPPORT + '">';
        for(var h in Overwatch.getSupport()) {
            s = s + '<option value="' + h + '">' + Overwatch.heros[h].name + '</option>';
        }
        s = s + '</optgroup>';

        s = s + '        </select>';
        s = s + '    </div>';
        s = s + '    </div>';

        return s;

    };


};