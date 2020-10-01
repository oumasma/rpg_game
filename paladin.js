class Paladin extends Character {
    constructor(name, hp, dmg, mana, costSpecialAttack) {
      super(name);
      this.hp = 16;
      this.dmg = 3;
      this.mana = 160;
      this.costSpecialAttack = 40;
    }
  
    healingLighting = (ennemy) => {
      if(this.castingSpell() ) {
        this.hp <= 11 ? this.hp += 5 : this.hp = 16; // heal max 16
        console.log(`${this.name} se soigne 4 points de vie !`);
        this.dealDamage(4, ennemy); // damage
      }
    }
  }
