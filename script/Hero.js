/**
 * Hero base class
 */
function Hero() {

    this.name = null;
    this.type = null;
    this.icon = null;
    this.weapons = {};
    this.abilities = {};
    this.ultimates = {};

    this.getName = function() {
        return this.name;
    };

    this.setName = function(sName) {
        this.name = sName;
    };

    this.getType = function() {
        return this.type;
    };

    this.setType = function(sType) {
        this.type = sType;
    };

    this.getIcon = function() {
        return this.icon;
    };

    this.setIcon = function(sIcon) {
        this.icon = sIcon;
    };

    /**
     * Return list of heros this hero is a good counter for
     */
    this.getIsCounterFor = function() {
        return [];
    };






};