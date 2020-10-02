class Character { 
        name;
        hp;
        dmg;
        mana;  

        constructor(name) {
            this.name = name;   
        }   


        takeDamage = (damage) => { 
          this.hp -= damage; 
        }
    
        dealDamage = (victim) => { // using this method for basic attacks and spells
        victime.takeDamage(this.dmg);
        return 'Ouch';
        }
    
}
