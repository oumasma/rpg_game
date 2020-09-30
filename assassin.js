class assassin extends character {
    constructor(hp = 6,  status = "playing", mana = 20, dmg = 8, attackArm = "Shadow hit") {
        this.hp  = hp ;
        this.mana = mana;
        this.dmg = dmg;
        this.status = status
        this.attackArm = attackArm
    }
}