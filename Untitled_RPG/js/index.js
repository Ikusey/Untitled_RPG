let x = 0
let y = 100
let a = 100
let b = 0
let countS = 0
let countH = 0

 function attack(){
     x = Math.floor((Math.random() * 10) + 1)
     b = Math.floor((Math.random() * 10) + 1)
     y = y - b
     a = a - x
     result()
     if(countS > 0){
         countS--
      }else if(countH > 0){
          countH--
      }
 }

 function stun(){
    if(countS <= 0){
    x = Math.floor((Math.random() * 5) + 1)
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
          x = Math.floor((Math.random() * 10) + 1)
          b = Math.floor((Math.random() * 10) + 1)
           y = y + x - b
          x = 0
          countH = 3
          result()
          if(countS > 0){
              countS--
           }
    }else if(y >= 100 && countH <= 0){
         b = Math.floor((Math.random() * 10) + 1)
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

 function reset(){
    x = 0
    y = 100
    a = 100
    b = 0
    countS = 0
    countH = 0
    result()
  }

  function result(){
     document.getElementById("health").innerHTML = "Health: " + y
     document.getElementById("damage").innerHTML = "Damage: " + x
     document.getElementById("Ehealth").innerHTML = "Enemy Health: " + a
     document.getElementById("Edamage").innerHTML = "Enemy Damage: " + b
     if(a <= 0){
      alert("You win!")
    } else if(y <= 0){
        alert("You Lose!")
       }
 }