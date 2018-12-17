function Ana () {

    this.name = 'Ana';
    this.type = Overwatch.CATEGORY_SUPPORT;
    this.icon = '/resources/players/ana.png';

    /**
     * Weapons
     * @type {Weapon}
     */
    this.weapons['Biotic Rifle'] = new Weapon();
    this.weapons['Biotic Rifle'].name = 'Biotic Rifle';
    this.weapons['Biotic Rifle'].description = 'Ana\'s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle\'s scope to zoom in on targets and make highly accurate shots.';
    this.weapons['Biotic Rifle'].damage = 70;
    this.weapons['Biotic Rifle'].healing = 75;
    this.weapons['Biotic Rifle'].moveSpeed = 1.9; // Meters per second
    this.weapons['Biotic Rifle'].projectileSpeed = 90; // Meters per second
    this.weapons['Biotic Rifle'].rateOfFire = 1.25; // Shoots per second
    this.weapons['Biotic Rifle'].ammo = 14;
    this.weapons['Biotic Rifle'].reloadTime = 1.5; // seconds
    this.weapons['Biotic Rifle'].details[0] =  'Biotic Rifle can damage enemy Torbjörn and Symmetra turrets but cannot heal friendly ones.';
    this.weapons['Biotic Rifle'].details[1] =  'The exact distribution of damage over time is unclear, although it appears to be 4 hits over the duration.';
    this.weapons['Biotic Rifle'].details[2] =  'While scoped, shooting will leave a tracer.';
    this.weapons['Biotic Rifle'].details[3] =  'Shots will pass through full health allies, without affecting them.';

    /**
     * Abilities
     */
    this.abilities['Sleep Dart'] = new Ability();
    this.abilities['Sleep Dart'].name = 'Sleep Dart';
    this.abilities['Sleep Dart'].description = 'Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).';
    this.abilities['Sleep Dart'].damage = 5;
    this.abilities['Sleep Dart'].projectileSpeed = 60; // meters / seconds
    this.abilities['Sleep Dart'].duration = 5.5; // Seconds
    this.abilities['Sleep Dart'].cooldown = 12; // Seconds

    this.abilities['Biotic Grenade'] = new Ability();
    this.abilities['Biotic Grenade'].name = 'Biotic Grenade';
    this.abilities['Biotic Grenade'].description = 'Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.';
    this.abilities['Biotic Grenade'].damage = 60;
    this.abilities['Biotic Grenade'].healing = 100;
    this.abilities['Biotic Grenade'].projectileSpeed = 40; // meters / seconds
    this.abilities['Biotic Grenade'].duration = 4; // Seconds
    this.abilities['Biotic Grenade'].cooldown = 10; // Seconds

    /**
     * Ultimate
     */
    this.ultimates['Nano Boost'] = new Ultimate();
    this.ultimates['Nano Boost'].name = 'Nano Boost';
    this.ultimates['Nano Boost'].description = 'After Ana hits one of her allies with a combat boost, they deal more damage, take less damage from enemies\' attacks.';
    this.ultimates['Nano Boost'].healing = 300;
    this.ultimates['Nano Boost'].maximumRange = 40; // meters
    this.ultimates['Nano Boost'].duration = 8; // Seconds
    this.ultimates['Nano Boost'].chargeRequired = 1875; // points


};

Ana.prototype = new Hero();

// Add hero to hero list
Overwatch.heros['Ana'] = new Ana();
