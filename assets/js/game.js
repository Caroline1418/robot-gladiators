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
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.floor (Math.random() * (max - min + 1 + min));
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
        playerHealth = Math.max(0, playerHealth - enemyAttack);
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
            enemyHealth = Math.floor(Math.random()* 21) + 40;
            fight(pickedEnemyName);
            if(playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
            }
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

var shop = function(){
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt){
        case "refill":
        case "REFILL":
            if(playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 6 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if(playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid question. Try again.");
            shop();
            break;
    }
};

startGame();