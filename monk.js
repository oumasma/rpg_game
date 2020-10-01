class Monk extends Character {
    constructor(name = "Moana", hp = 8, status = "playing", dmg = 2, mana = 200,  Heal) {
        super(name, hp, mana, dmg, status);
        this.Heal = Heal;
    }
}
