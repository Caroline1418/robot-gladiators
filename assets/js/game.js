
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}


var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive 
    while (enemyHealth  > 0 && playerHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight

            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
            } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

            // check player's health
            if (playerHealth <=0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
            } 
            else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
    }//end while
};//end fight function

var startGame = function (){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i <enemyNames.length; i ++){
        if (playerHealth >0){
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
            var pickedEnemyName = enemyNames [i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
endGame ();
};

var endGame = function(){
    if (playerHealth >0){
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ". ");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm ("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  };
  
  var fightOrSkip = function() {
    // ask user if they'd like to fight or skip using  function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
  
    promptFight = promptFight.toLowerCase();
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        return true;
      }
      else {
        fightOrSkip();
      }
    }
  }
  
  var fight = function (enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
  
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    } 
  
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            // ask user if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
              // if true, leave fight by breaking loop
                break;
            }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
  
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " 
            + enemy.name + " now has " + enemy.health + " health remaining.");
  
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
      
            //award player moneyf or winning
            playerInfo.money = playerInfo.money + 20;
      
            //leave while loop since enemy is dead
            break;
        } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //player gets attacked first
        } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
  
        // Log a resulting message to the console so we know that it worked.
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name 
        + " now has " + playerInfo.health + " health remaining.");
      
  
        // check player's health
        if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
        } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        } 
        isPlayerTurn = !isPlayerTurn;
      } //close for while loop
  }; //fight function close
  
  
  
  var startGame = function () {
    playerInfo.reset();
  
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        // call fight function with enemy robot
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      };
  
      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        };
      };
    };
    // play again
    endGame();
  };
  
  var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
      highScore = 0;
    }
    // if player have more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
  
      alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
      alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
      startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };
  
  var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: '1', '2', or '3' to make a choice."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch to carry out action
    switch (shopOptionPrompt) {
      // new case
      case 1:
        playerInfo.refillHealth();
        break;
  
      // new case
      case 2:
        playerInfo.upgradeAttack();
        break;
  
      // new case
      case 3:
        window.alert("Leaving the store.");
        // do nothing, so function will end
        break;
  
      default:
        window.alert("You did not pick a valid option. Try again.");
  
        // call shop() again to force player to pick a valid option
        shop();
        break;
    };
  };

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log( "Your robot's name is" + name);
    return name;
  };
  
  var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function () {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function () {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
    }
    
  
  };

  console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

  var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
  ];
  
  // start the game when the page loads
  startGame();
