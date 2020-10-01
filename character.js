class Character {
    constructor(name, hp, dmg, mana, status) {
        
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }
    kill = () => {
        this.hp = 0;
        this.status = "dead";
    }
}