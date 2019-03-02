var charOne = {
    name: "onos",
    hp: 100,
    ap: 6,
    bAp: 6,
    cp: 15
};
var charTwo = {
    name: "twanne",
    hp: 150,
    ap: 5,
    bAp: 5,
    cp: 10
};
var charThree = {
    name: "trensa",
    hp: 120,
    ap: 7,
    bAp: 7,
    cp: 12
};
var charFour = {
    name: "fronsek",
    hp: 90,
    ap: 15,
    bAp: 15,
    cp: 20
};

$("#battleOptions").hide();
$("#charOneStats").text("HP: " + charOne.hp +" | AP: " + charOne.ap + " | CP: " + charOne.cp);
$("#charTwoStats").text("HP: " + charTwo.hp +"  | AP: " + charTwo.ap + " | CP: " + charTwo.cp);
$("#charThreeStats").text("HP: " + charThree.hp +"  | AP: " + charThree.ap + " | CP: " + charThree.cp);
$("#charFourStats").text("HP: " + charFour.hp +"  | AP: " + charFour.ap + " | CP: " + charFour.cp);
$("#charOneName").text(charOne.name);
$("#charTwoName").text(charTwo.name);
$("#charThreeName").text(charThree.name);
$("#charFourName").text(charFour.name);

var playerChar;
var currentEnemy;
var enemyChars = [];
var enemyCount = 3;
var playerHasChar = false;
var enemySelected = false;

$("#charOne").on("click", function() {
    if(!playerHasChar)
    {
        playerChar = charOne;
        playerHasChar = true;
        this.removeAttribute("id");
        $("#charOneStats").hide();
        $("#charOneName").hide();
        $("#playerImg").append(this);
        makePlayerCard(charOne);
        $("#optionDiv").remove(this);
    }
    if(playerHasChar && !enemySelected)
    {
        currentEnemy = charOne;
        enemySelected = true;
        $("#enemyImg").append(this);
        $("#charOneStats").hide();
        $("#charOneName").hide();
        makeEnemyCard(charOne);
        addBattleOptions();
        hideEnemySelect();
        $("#optionDiv").remove(this);
    }
});

$("#charTwo").on("click", function() {
    if(!playerHasChar)
    {
        playerChar = charTwo;
        playerHasChar = true;
        this.removeAttribute("id");
        $("#charTwoStats").hide();
        $("#charTwoName").hide();
        $("#playerImg").append(this);
        makePlayerCard(charTwo);
        $("#optionDiv").remove(this);
    }
    if(playerHasChar && !enemySelected)
    {
        currentEnemy = charTwo;
        enemySelected = true;
        $("#enemyImg").append(this);
        $("#charTwoStats").hide();
        $("#charTwoName").hide();
        makeEnemyCard(charTwo);
        addBattleOptions();
        hideEnemySelect();
        $("#optionDiv").remove(this);
    }
});

$("#charThree").on("click", function() {
    if(!playerHasChar)
    {
        playerChar = charThree;
        playerHasChar = true;
        this.removeAttribute("id");
        $("#charThreeStats").hide();
        $("#charThreeName").hide();
        $("#playerImg").append(this);
        makePlayerCard(charThree);
        $("#optionDiv").remove(this);
    }
    if(playerHasChar && !enemySelected)
    {
        currentEnemy = charThree;
        enemySelected = true;
        $("#enemyImg").append(this);
        $("#charThreeStats").hide();
        $("#charThreeName").hide();
        makeEnemyCard(charThree);
        addBattleOptions();
        hideEnemySelect();
        $("#optionDiv").remove(this);
    }
});

$("#charFour").on("click", function() {
    if(!playerHasChar)
    {
        playerChar = charFour;
        playerHasChar = true;
        this.removeAttribute("id");
        $("#charFourStats").hide();
        $("#charFourName").hide();
        $("#playerImg").append(this);
        makePlayerCard(charFour);
        $("#optionDiv").remove(this);
    }
    if(playerHasChar && !enemySelected)
    {
        currentEnemy = charFour;
        enemySelected = true;
        $("#enemyImg").append(this);
        $("#charFourStats").hide();
        $("#charFourName").hide();
        makeEnemyCard(charFour);
        addBattleOptions();
        hideEnemySelect();
        $("#optionDiv").remove(this);
    }
});

$("#attackBtn").on("click", function() {
    var hasWon = false;
    currentEnemy.hp -= playerChar.ap;
    $("#enemyHealth").text("Health Points: " + currentEnemy.hp);
    playerChar.ap += playerChar.bAp;
    $("#playerAp").text("Attack Power: " + playerChar.ap);

    if(currentEnemy.hp <= 0)
    {
        hideBattleOptions();
        
        alert("You have defeated " + currentEnemy.name + ".");

        $("#enemyImg").empty();
        $("#enemyStats").empty();

        enemyCount--;
        if(enemyCount === 0)
        {
            var cont = confirm("You have won! would you like to play again?");
            if(cont)
            {
                hasWon = true;
                location.reload();
            }
        }

        showEnemySelect();
        enemySelected = false;
    }

    playerChar.hp -= currentEnemy.cp;
    $("#playerHealth").text("Health Points: " + playerChar.hp);

    if(playerChar.hp <= 0 && !hasWon)
    {
        var cont = confirm("You have been defeated, would you like to play again?");
        if(cont)
        {
            location.reload();
        }
    }
});

function makeEnemyCard (enemy) {
    var enemyCard = $("<div>");
    var enemyName = $("<h4>");
    var enemyHp = $("<p>");
    var enemyCp = $("<p>");

    enemyCard.addClass("card");
    enemyCard.attr("style", "width: 150px; margin-left: auto; margin-right: auto;");

    enemyName.addClass("card-title");
    enemyName.text(enemy.name);

    enemyHp.addClass("card-text");
    enemyHp.attr("id", "enemyHealth");
    enemyHp.text("Health Points: " + enemy.hp);

    enemyCp.addClass("card-text");
    enemyCp.text("Counter Points: " + enemy.cp);

    enemyCard.append(enemyName);
    enemyCard.append(enemyHp);
    enemyCard.append(enemyCp);

    $("#enemyStats").append(enemyCard);
}

function makePlayerCard (player) {
    var playerCard = $("<div>");
    var playerName = $("<h4>");
    var playerHp = $("<p>");
    var playerAp = $("<p>");

    playerCard.addClass("card");
    playerCard.attr("style", "width: 150px; margin-left: 0px; margin-right: auto;");

    playerName.addClass("card-title");
    playerName.text(player.name);

    playerHp.addClass("card-text");
    playerHp.attr("id", "playerHealth");
    playerHp.text("Health Points: " + player.hp);

    playerAp.addClass("card-text");
    playerAp.attr("id", "playerAp");
    playerAp.text("Attack Power: " + player.ap);

    playerCard.append(playerName);
    playerCard.append(playerHp);
    playerCard.append(playerAp);


    $("#playerStats").append(playerCard);
}

function addBattleOptions () {
    $("#battleOptions").show();
}

function hideBattleOptions () {
    $("#battleOptions").hide();
}

function hideEnemySelect () {
    $("#optionDiv").hide();
}

function showEnemySelect () {
    $("#optionDiv").show();
}