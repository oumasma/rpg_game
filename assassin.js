class Assassin extends Character {
    constructor(name =  "Draven", hp = 6,  status = "playing", mana = 20, dmg = 8, Shadowhit) {
        super(name, hp, mana, dmg, status);
        this.Shadowhit = Shadowhit;
    }
}
let instance1 = new Assassin("13h57", 4);


/*let shadowhit ={
  damage : 0,
  attackSpcial : 7,
  noDeadVictim: -7,
  attackCoast: {20 - "mana"}
};*/