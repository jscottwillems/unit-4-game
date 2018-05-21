
// Global Variables
var characterSelected = false;
var opponentSelected = false;
var character = {};
var opponent = {};
var enemiesDefeated = 0;
gameOver = false;

// Characters
var dragonborn = {
    name: "Dragonborn",
    health: 130,
    baseAttack: 9,
    attack: 10
};

var troll = {
    name: "Troll",
    health: 150,
    baseAttack: 3,
    attack: 18
};

var falmer = {
    name: "Falmer",
    health: 100,
    baseAttack: 5,
    attack: 10
};

var dragon = {
    name: "Dragon",
    health: 180,
    baseAttack: 2,
    attack: 22
};



// initialize character value from global character variables
function initializeCharacter(chosenCharacter) {
    $('audio#characterselect')[0].play();
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.baseAttack = chosenCharacter.baseAttack;
    character.attack = chosenCharacter.attack;
}

// initialize opponent's value from global character variables
function initializeOpponent(chosenOpponent) {
    $('audio#enemyselect')[0].play();
    opponent.name = chosenOpponent.name;
    opponent.health = chosenOpponent.health;
    opponent.baseAttack = chosenOpponent.baseAttack;
    opponent.attack = chosenOpponent.attack;
    
}

// move remaining characters to the enemies section
function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
    $('#choose-your').text('Choose Your Opponent');
}

// reset game state
function resetGame() {

    // health gets reset back to original values

    $("#dragonborn").children(".health").html(dragonborn.health);
    $("#troll").children(".health").html(troll.health);
    $("#falmer").children(".health").html(falmer.health);
    $("#dragon").children(".health").html(dragon.health);
    // set images back to original position
    $(".character-image").removeClass("chosen-character enemy-character opponent-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
    // clear game message and hide restart button
    $("#game-message").empty();
    $('#choose-your').text('Choose Your Fighter');
    $("#restart").hide();
    $("#chosen-character").hide();
    $("#arena").hide();
    $("#opponent-section").hide();
    $("#enemies-available").hide();
    // reset game logic and stats
    characterSelected = false;
    opponentSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
}

$(document).ready(function() {

    $('audio#theme')[0].play();

    // hide sections on doc load
    $("#restart").hide();
    $("#chosen-character").hide();
    $("#arena").hide();
    $("#opponent-section").hide();
    $("#enemies-available").hide();

    // character selection
    $("#dragonborn-character").on("click", function () {
        console.log("Dragonborn is selected");

        if(characterSelected == false) {
            $("#game-message").empty();

            // set dragonborn as chosen character
            initializeCharacter(dragonborn);
            characterSelected = true;

            // move image to chosen character section
            $("#restart").show();
            $("#chosen-character").show();
            $("#arena").show();
            $("#opponent-section").show();
            $("#enemies-available").show();
            $("#dragonborn-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);

            // move all other images to enemies section
            moveToEnemies();
        } else if ((characterSelected == true) && (opponentSelected == false)) {

            // opponent selection
            if ($("#dragonborn-character").hasClass("enemy-character")) {
                $("#game-message").empty();

                // set dragonborn as enemy
                initializeOpponent(dragonborn);
                opponentSelected = true;

                // move image to opponent section
                $("#dragonborn-character").removeClass("enemy-character").addClass("opponent-character");
                $("#opponent-section").append(this);
            }
        }
    });

    $("#troll-character").on("click", function () {
        console.log("Troll is selected");

        if(characterSelected == false) {
            $("#game-message").empty();

            // set troll as chosen character
            initializeCharacter(troll);
            characterSelected = true;

            // move image to chosen character section
            $("#restart").show();
            $("#chosen-character").show();
            $("#arena").show();
            $("#opponent-section").show();
            $("#enemies-available").show();
            $("#troll-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);

            // move all other images to enemies section
            moveToEnemies();
        } else if ((characterSelected == true) && (opponentSelected == false)) {

            // opponent selection
            if ($("#troll-character").hasClass("enemy-character")) {
                $("#game-message").empty();

                // set troll as enemy
                initializeOpponent(troll);
                opponentSelected = true;

                // move image to opponent section
                $("#troll-character").removeClass("enemy-character").addClass("opponent-character");
                $("#opponent-section").append(this);
            }
        }
    });

    $("#falmer-character").on("click", function () {
        console.log("Falmer is selected");

        if(characterSelected == false) {
            $("#game-message").empty();

            // set dragonborn as chosen character
            initializeCharacter(falmer);
            characterSelected = true;

            // move image to chosen character section
            $("#restart").show();
            $("#chosen-character").show();
            $("#arena").show();
            $("#opponent-section").show();
            $("#enemies-available").show();
            $("#falmer-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);

            // move all other images to enemies section
            moveToEnemies();
        } else if ((characterSelected == true) && (opponentSelected == false)) {

            // opponent selection
            if ($("#falmer-character").hasClass("enemy-character")) {
                $("#game-message").empty();

                // set falmer as enemy
                initializeOpponent(falmer);
                opponentSelected = true;

                // move image to opponent section
                $("#falmer-character").removeClass("enemy-character").addClass("opponent-character");
                $("#opponent-section").append(this);
            }
        }
    });

    $("#dragon-character").on("click", function () {
        console.log("Dragon is selected");

        if(characterSelected == false) {
            $("#game-message").empty();

            // set dragon as chosen character
            initializeCharacter(dragon);
            characterSelected = true;

            // move image to chosen character section
            $("#restart").show();
            $("#chosen-character").show();
            $("#arena").show();
            $("#opponent-section").show();
            $("#enemies-available").show();
            $("#dragon-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);

            // move all other images to enemies section
            moveToEnemies();
        } else if ((characterSelected == true) && (opponentSelected == false)) {

            // opponent selection
            if ($("#dragon-character").hasClass("enemy-character")) {
                $("#game-message").empty();

                // set dragon as enemy
                initializeOpponent(dragon);
                opponentSelected = true;

                // move image to opponent section
                $("#dragon-character").removeClass("enemy-character").addClass("opponent-character");
                $("#opponent-section").append(this);
            }
        }
    });

    $("#attack").on("click", function() {
        $('audio#attack')[0].play()
    
        if (characterSelected && opponentSelected && !gameOver) {
            opponent.health = opponent.health - character.attack;
            $(".opponent-character").children(".health").html(opponent.health);
            $("#game-message").html("<p>You attacked " + opponent.name + " for " + character.attack + " damage.<p>");

            character.attack = character.attack + character.baseAttack;

            if (opponent.health > 0) {
                character.health = character.health - opponent.attack;
                $(".chosen-character").children(".health").html(character.health);

                if (character.health > 0) {
                    setTimeout(function() {
                    $('audio#counterattack')[0].play()
                    $("#game-message").append("<p>" + opponent.name + " attacked you back for " + opponent.attack + " damage.</p>");
                    }, 1000);
                } else {
                    gameOver = true;
                    $('audio#gameover')[0].play()
                    $("#game-message").html("<p>You have been defeated...</p><p>Try Again?</p>");
                    }
                } else {
                    enemiesDefeated++;
                    opponentSelected = false;
                    $("#game-message").html("<p>You have defeated " + opponent.name + ". Choose another enemy to destroy.</p>");
                    $(".opponent-character").hide();
                    
                    if (enemiesDefeated === 3) {
                        gameOver = true;
                        $("#game-message").html("<p>You have defeated all enemies. Congratulations!</p><p>Play again?</p>");
                        $('audio#gamewin')[0].play()
                }
            }
        } else if (!characterSelected && !gameOver) {
            $("#game-message").html("<p>You must first select your character.</p>");
        } else if (!opponentSelected && !gameOver) {
            $("#game-message").html("<p>You must choose an enemy to fight.</p>");
        }
    });

    $("#restart").on("click", function() {
        console.log("Restart selected");
        location.reload(true);
    
        resetGame();
    });

});