class berzerker extends character {
    constructor(name, hp = 8,  status = "playing", mana = 0, dmg = 4 , attackArm = "Rage" ) {
        
        this.name = name;
        this.hp  = hp ;
        this.mana = mana;
        this.dmg = dmg;
        this.status = status;
        this.attackArm = attackArm;
    }
}