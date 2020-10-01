class Character {
    constructor(name, hp, dmg, mana, status, costSpecialAttack) {
        
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "playing";
        this.costSpecialAttack = costSpecialAttack;

    }
    takeDamage = (dmgReceived) => { //method
        if(dmgReceived < this.hp) {
          this.hp -= dmgReceived;
        } else {
          this.hp = 0;
          this.status = "loser";
          console.log(`${this.name} est mort`);
        }
      }
    
      dealDamage = (dmgDealt, defender) => { // using this method for basic attacks and spells
        defender.takeDamage(dmgDealt);
        console.log(`${this.name} inflige ${dmgDealt} points de dégats à ${defender.name}`);
      }
    
      castingSpell = () => { // check if a character can cast a spell
        if(this.mana >= this.costSpecialAttack) {
          this.mana -= this.ccostSpecialAttack;
          return true;
        } else {
          console.log(`${this.name} n'a pas assez de mana`);
          return false;
        }
      }
    }