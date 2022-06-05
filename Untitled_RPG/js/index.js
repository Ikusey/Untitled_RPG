let x = 0
let y = 100
let a = 100
let b = 0
let countS = 0
let countH = 0
let strength = 0, defense = 0, constitution = 0
let strengthE = 0, defenseE = 0, constitutionE = 0
let points = 3
let coins = 0
let healthPots = 0
const Goblin = {
  name: "Goblin", 
  strength: 0, 
  defense: 0, 
  constitution: 0, 
  imgFile: 'images/goblin.png',
  description: 
"Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures."
}

const Bandit = {
  name: "Bandit", 
  strength: 1, 
  defense: 1, 
  constitution: 1, 
  imgFile: 'images/bandit.png',
  description:
"Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. Not all bandits are evil. Oppression, drought, disease, or famine can often drive otherwise honest folk to a life of banditry. Pirates are bandits of the high seas. They might be freebooters interested only in treasure and murder, or they might be privateers sanctioned by the crown to attack and plunder an enemy nation's vessels."
}

const Orc = {
name: "Orc", 
strength: 2, 
defense: 2, 
constitution: 2, 
imgFile: 'images/orc.png',
description:
"Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them."
}

const Troll = {
name: "Troll", 
strength: 3, 
defense: 3, 
constitution: 3, 
imgFile: 'images/troll.png',
description:
"Fearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll’s flesh."
}

const Ogre = {
name: "Ogre", 
strength: 4, 
defense: 4, 
constitution: 4, 
imgFile: 'images/ogre.png',
description:
"Ogres are hulking giants notorious for their quick tempers. When its rage is incited, an ogre lashes out in a frustrated tantrum until it runs out of objects or creatures to smash."
}

const Skeleton = {
name: "Skeleton", 
strength: 2, 
defense: -1, 
constitution: -1, 
imgFile: 'images/skeleton.png',
description:
"Skeletons are the re-animated, completely decomposed body of a humanoid. The flesh has completely disappeared, leaving a bone structure magically held together, that moves oddly in its attempt to imitate life"
}

const Zombie = {
name: "Zombie", 
strength: 1, 
defense: 3, 
constitution: 3, 
imgFile: 'images/zombie.png',
description: 
"Undead zombies move with a jerky, uneven gait. They are clad in the moldering apparel they wore when put to rest, and carry the stench of decay."
}

const Kobold = {
name: "Kobold", 
strength: -1, 
defense: -1, 
constitution: -4, 
imgFile: 'images/kobold.png',
description: 
"Kobolds are often dismissed as cowardly, foolish, and weak, but these little reptilian creatures actually have a strong social structure that stresses devotion to the tribe, are clever with their hands, and viciously work together in order to overcome their physical limitations. Can attack twice."
}

const Harpy = {
name: "Harpy", 
strength: 1, 
defense: 1, 
constitution: -2, 
imgFile: 'images/harpy.png',
description: 
"A harpy combines the body, legs, and wings of a vulture with the torso, arms, and head of a human female. Its sweet song has lured countless adventurers to their deaths. Can attack twice."
}

const enemies = [Goblin, Bandit, Orc, Troll, Ogre, Skeleton, Zombie, Kobold, Harpy]
let currentEnemy = Goblin
let hasSword = false
let hasShield = false
let hasArmor = false
var uploadField = document.getElementById("file");

 function attack(){
     x = Math.floor((Math.random() * 10) + 1) + strength - currentEnemy.defense
     b = Math.floor((Math.random() * 10) + 1) - defense + currentEnemy.strength
     y = y - b
     a = a - x
     if(currentEnemy.name == "Harpy" || currentEnemy.name == "Kobold"){
       y = y - b
     }
     result()
     if(countS > 0){
         countS--
      }
    if(countH > 0){
          countH--
      }
 }

 function stun(){
    if(countS <= 0){
    x = Math.floor((Math.random() * 5) + 1) + strength - currentEnemy.defense
    a = a - x
    countS = 3
    result()
    if(countH > 0){
        countH--
       }
       }else{
       alert("Stun is on cooldown!")
       }
}

 function heal(){
       if(y < 100 && countH <= 0){
          x = Math.floor((Math.random() * 10) + 1) + constitution
          b = Math.floor((Math.random() * 10) + 1) - defense + currentEnemy.strength
          y = y + x - b
          x = 0
          countH = 3
          result()
          if(countS > 0){
              countS--
           }
    }else if(y >= 100 && countH <= 0){
         b = Math.floor((Math.random() * 10) + 1) - defense + currentEnemy.strength
           y = y - b
        result()
        if(countS > 0){
             countS--
         }
        alert("Health was full! Turn wasted!")
    }else{
          alert("Heal is on cooldown!")
     }
  }

 function newFight(){
    currentEnemy = enemies[Math.floor((Math.random() *9))]
    x = 0
    y = 100 + (constitution * 10)
    a = 100 + (currentEnemy.constitution * 10)
    b = 0
    countS = 0
    countH = 0
    result()
  }

  function decrease(attribute){
    
    if (attribute == "strength" && strength > 0){
        strength--
        document.getElementById(attribute).innerHTML = strength
        points++
  }
    else if (attribute == "defense" && defense > 0){
        defense--
        document.getElementById(attribute).innerHTML = defense
        points++
      }
    else if (attribute == "constitution" && constitution > 0){
        constitution--
        document.getElementById(attribute).innerHTML = constitution
        points++
  }
  document.getElementById("points").innerHTML = points
}

function increase(attribute){
    if(points <= 0){
        alert("No attribute points!")
    }
    if(points > 0){
    if (attribute == "strength"){
        strength++
        document.getElementById(attribute).innerHTML = strength
        points--
  }
    else if (attribute == "defense"){
        defense++
        document.getElementById(attribute).innerHTML = defense
        points--
      }
    else if (attribute == "constitution"){
        constitution++
        document.getElementById(attribute).innerHTML = constitution
        points--
  }
  document.getElementById("points").innerHTML = points
}
}

function buySword(){
  if(coins >= 5 && hasSword == false){
    strength = strength + 3
    document.getElementById("sword").innerHTML = "[x]"
    document.getElementById("strength").innerHTML = strength
    hasSword = true
  }else if(coins < 5 && hasSword == false){
    alert("Not enough coins!")
  }else if(hasSword == true){
    alert("You already have a sword!")
  }

}

function buyShield(){
  if(coins >= 5 && hasSword == false){
    defense = defense + 3
    document.getElementById("shield").innerHTML = "[x]"
    document.getElementById("defense").innerHTML = defense
    hasShield = true
  }else if(coins < 5 && hasShield == false){
    alert("Not enough coins!")
  }else if(hasShield == true){
    alert("You already have a shield!")
  }
}

function buyArmor(){
  if(coins >= 5 && hasArmor == false){
    constitution = constitution + 3
    document.getElementById("armor").innerHTML = "[x]"
    document.getElementById("constitution").innerHTML = constitution
    hasArmor = true
  }else if(coins < 5 && hasArmor == false){
    alert("Not enough coins!")
  }else if(hasArmor == true){
    alert("You already have armor!")
  }
}

function buyPotion(){
  if(coins >= 2){
    healthPots++
    document.getElementById("potion").innerHTML = "[" + healthPots + "]"
  }else if(coins < 2 ){
    alert("Not enough coins!")
}
}

function useHealthPot(){
  if(healthPots >= 1 && y < 100){
    y = y + 10
    healthPots--
    document.getElementById("potion").innerHTML = "[" + healthPots + "]"
    document.getElementById("health").innerHTML = "Health: " + y
  }else if(healthPots >= 1 && y >=100){
    alert("Health is full!")
  }else if(healthPots < 1 && y < 100){
    alert("No health potions!")
  }else if(healthPots < 1 && y >= 100){
    alert("No health potions and health is full!")
  }
}

  function result(){
     document.getElementById("health").innerHTML = "Health: " + y
     document.getElementById("damage").innerHTML = "Damage: " + x
     document.getElementById("Ehealth").innerHTML = "Enemy Health: " + a
     document.getElementById("Edamage").innerHTML = "Enemy Damage: " + b
     document.getElementById("enemy").innerHTML = "Enemy: " + currentEnemy.name
     document.getElementById("strengthE").innerHTML = currentEnemy.strength
     document.getElementById("defenseE").innerHTML = currentEnemy.defense
     document.getElementById("constitutionE").innerHTML = currentEnemy.constitution
     document.getElementById("enemyDescription").innerHTML = currentEnemy.description
     document.getElementById("enemyPortrait").src = currentEnemy.imgFile
     if(a <= 0 && y > 0){
      alert("You win!")
      points++
      coins++
      document.getElementById("points").innerHTML = points
      document.getElementById("coins").innerHTML = "Coins: " + coins
    } else if(y <= 0 && a > 0){
        alert("You Lose!")
       }else if(y <= 0 && a <= 0){
           alert("Tie!")
       }
 }

 window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});

uploadField.onchange = function() {
  if(this.files[0].size > 100000){
     alert("File is too big!");
     this.value = "";
  };
};