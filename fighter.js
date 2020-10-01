class Fighter extends Character {
    constructor(name = "Grace", hp = 12 , status = "playing", dmg = 4, mana = 40, DarkVision) {
        super(name, hp, mana, dmg, status);
        this.DarkVision =  DarkVision;
    }
}
