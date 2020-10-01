class Monk extends Character {
    constructor(name, hp, dmg, mana, costSpecialAttack) {
      super(name);
      this.hp = 8;
      this.dmg = 2;
      this.mana = 200;
      this.costSpecialAttack = 25 ;
    }
  
    heal = () => {
      if(this.castingSpell() ) {
        this.hp = 8;
        console.log(`${this.name} se soigne !`);
      }
    }
  }
