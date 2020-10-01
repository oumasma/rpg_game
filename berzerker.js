class Berzerker extends Character {
    constructor(name = "Carl", hp = 8,  status = "playing", mana = 0, dmg = 4 , Rage) {
        super(name, hp, mana, dmg, status);
        this.Rage = Rage
    }
}