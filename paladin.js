class Paladin extends Character {
    constructor(name = "Ulder", hp = 16 , status = "playing", dmg = 3, mana = 160, HealingLighting) {
        super(name, hp, mana, dmg, status);
        this.HealingLighting = HealingLighting;
        
    }
}
