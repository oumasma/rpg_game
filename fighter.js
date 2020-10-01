class Fighter extends Character {
    constructor(name = "Grace", hp, dmg, mana, costSpecialAttack, shield) {
      super(name);
      this.hp = 12; 
      this.dmg = 4;
      this.mana = 40;
      this.costSpecialAttack = 20;
      this.shield = 0; // shield = protection against damages for 2 rounds
    }
  
    darkVision = (ennemy) => {
      if(this.castingSpell() ) {
        this.dealDamage(5, ennemy);
        this.shield = 2;
      }
    }
  }