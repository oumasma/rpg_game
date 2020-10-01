class Berzerker extends Character {
    constructor(name = "Draven", hp, dmg, mana, costSpecialAttack) {
      super(name);
      this.hp = 8;
      this.dmg = 4;
      this.mana = 0;
      this.costSpecialAttack = 0;
    }
  
    rage = () => {
      if(this.hp > 1) {
        this.hp -= 1;
        this.dmg += 1;
        console.log(`${this.name} a maintenant ${this.dmg} points de dégâts et ${this.hp} points de vie`)
      } else {
        console.log(`${this.name} n'a plus qu'un point de vie !`);
      }
    }
  }