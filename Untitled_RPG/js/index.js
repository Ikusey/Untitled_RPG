let x = 0
let y = 100
let a = 100
let b = 0
let countS = 0
let countH = 0
let strength = 0, defense = 0, constitution = 0
let strengthE = 0, defenseE = 0, constitutionE = 0
let points = 0
const Goblin = {name: "Goblin", strength: 0, defense: 0, constitution: 0}
const Bandit = {name: "Bandit", strength: 1, defense: 1, constitution: 1}
const Orc = {name: "Orc", strength: 2, defense: 2, constitution: 2}
const Troll = {name: "Troll", strength: 3, defense: 3, constitution: 3}
const Ogre = {name: "Ogre", strength: 4, defense: 4, constitution: 4}
const enemies = [Goblin, Bandit, Orc, Troll, Ogre]
let currentEnemy = Goblin.name

 function attack(){
     x = Math.floor((Math.random() * 10) + 1) + strength - currentEnemy.defense
     b = Math.floor((Math.random() * 10) + 1) - defense + currentEnemy.strength
     y = y - b
     a = a - x
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
    currentEnemy = enemies[Math.floor((Math.random() * 4))]
    x = 0
    y = 100 + constitution
    a = 100 + currentEnemy.constitution
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

  function result(){
     document.getElementById("health").innerHTML = "Health: " + y
     document.getElementById("damage").innerHTML = "Damage: " + x
     document.getElementById("Ehealth").innerHTML = "Enemy Health: " + a
     document.getElementById("Edamage").innerHTML = "Enemy Damage: " + b
     document.getElementById("enemy").innerHTML = "Enemy: " + currentEnemy.name
     document.getElementById("strengthE").innerHTML = currentEnemy.strength
     document.getElementById("defenseE").innerHTML = currentEnemy.defense
     document.getElementById("constitutionE").innerHTML = currentEnemy.constitution
     
     if(a <= 0 && y > 0){
      alert("You win!")
      points++
      document.getElementById("points").innerHTML = points
    } else if(y <= 0 && a > 0){
        alert("You Lose!")
       }else if(y <= 0 && a <= 0){
           alert("Tie!")
       }
 }