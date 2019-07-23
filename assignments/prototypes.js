/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject (Attributes){
  this.createdAt = Attributes.createdAt;
  this.name = Attributes.name;
  this.dimensions = Attributes.dimensions;
}

GameObject.prototype.destroy = function(){ return `${this.name} was removed from the game.` };

function CharacterStats (Attributes){
  this.healthPoints = Attributes.healthPoints;
  GameObject.call(this, Attributes);
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(attacker){ return `${this.name} took ${attacker.damage} damage!` };

function Humanoid (Attributes){
  this.team = Attributes.team;
  this.weapons = Attributes.weapons;
  this.language = Attributes.language;
  CharacterStats.call(this, Attributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){ return `${this.name} offers a greeting in ${this.language}` };

function Hero (Attributes){
  this.damage = Attributes.damage;
  this.race = Attributes.race;
  this.experience = Attributes.experience;
  this.gold = Attributes.gold;
  Humanoid.call(this, Attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attacked = function(obj){
  console.log(`${obj.name} attacks ${this.name}!`);
  this.healthPoints = this.healthPoints - obj.damage;
}

function Villain (Attributes){
  Hero.call(this,Attributes);
}

Villain.prototype = Object.create(Hero.prototype);

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 25,
    name: 'Hero',
    team: 'Self',
    weapons: [
      'Sword',
      'Axe',
    ],
    language: 'Common',
    damage: 5,
    race: 'Human',
    experience: 0,
    gold: 0,
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 5,
      height: 4,
    },
    healthPoints: 15,
    name: 'Troll',
    team: 'Bridge 22',
    weapons: [
      'Club',
      'Giant Fish',
    ],
    language: 'Troll',
    damage: 2,
    race: 'Troll',
    experience: 25,
    gold: 50,
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage(villain)); // Bruce took 2 damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  
  while (true){
    //Troll gets first strike!
    hero.attacked(villain); //Troll attacks Hero!
    console.log(hero.takeDamage(villain)); //Hero takes 2 damage!
    if (hero.healthPoints <= 0){
      //Hero has died!
      console.log(`${hero.name} has suffered lethal damage!`);
      console.log(hero.destroy());
      break;
    }
    //Hero counters!
    villain.attacked(hero); //Hero attacks Troll!
    console.log(villain.takeDamage(hero)); //Villain takes 5 damage!
    if (villain.healthPoints <= 0){
      //Troll has died! Yay!
      console.log(`${villain.name} has suffered lethal damage!`);
      console.log(villain.destroy());
      hero.experience += villain.experience;
      hero.gold += villain.gold;
      console.log(`Thou hast done well in slaying the ${villain.name}! Of experience thou hast gained ${villain.experience}. Of gold thou hast gained ${villain.gold}.`);
      break;
    }
  }


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!