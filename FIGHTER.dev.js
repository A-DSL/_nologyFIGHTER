"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//JS will include:
//-A class that will be used for the two fighters. This consists of a HP value, Energy value, and three functions for altering these values (HP loss, Energy gain, Energy loss from Super). 
//Event listeners for all of P1's buttons, for performing each attack and determining the random attack P2 will use. This will change image indexing and call the fighter class functions based on if statements. It will also affect various toggles based on Energy count, which grant access to Supers.
//P2's buttons are purely cosmetic and should only change to highlight when their Supers are available.
//Values to toggle for when victory/loss occurs.
var p1Victory = false;
var p2Victory = false; //Accessor variables for HTML code.
//  HP Bars

var playerOneHPBar = document.querySelector(".playerone__HP");
var playerTwoHPBar = document.querySelector(".playertwo__HP"); // Player Sprites

var playerOneSprite = document.querySelector(".playerone__image");
var playerTwoSprite = document.querySelector(".playertwo__image"); //  P1 Normals

var beam = document.getElementsByClassName("regularbutton")[0];
var blast = document.getElementsByClassName("regularbutton")[1];
var baseball = document.getElementsByClassName("regularbutton")[2]; //  P1 Supers

var hyperbeam = document.getElementsByClassName("superbutton")[0];
var explosion = document.getElementsByClassName("superbutton")[1];
var homerun = document.getElementsByClassName("superbutton")[2]; //  Dialogue

var dialogue = document.querySelector(".dialogue");
var dialogueHeadline = document.querySelector(".dialogue__headline");
var dialogueFlavourText = document.querySelector(".dialogue__flavourtext"); //Fighter Class. Functions for losing HP, gaining Energy, and losing Energy.

var Fighter =
/*#__PURE__*/
function () {
  function Fighter(name, HPBar) {
    _classCallCheck(this, Fighter);

    //sneaky variable meant to access player-specific Energy/Super tags in HTML
    this.name = name;
    this.energybar = document.querySelector(".".concat(this.name, "__energy"));
    this.hyperbeambutton = document.querySelector(".".concat(this.name, "__hyperbeamOff"));
    this.explosionbutton = document.querySelector(".".concat(this.name, "__explosionOff"));
    this.homerunbutton = document.querySelector(".".concat(this.name, "__homerunOff"));
    this.hitpoints = 3;
    this.energy = 0; //Class can modify HP Bar HTML.

    this.HPBar = HPBar; //Toggles for supers.

    this.canHyperBeam = false;
    this.canExplode = false;
    this.canHomerun = false;
  }

  _createClass(Fighter, [{
    key: "deductHP",
    value: function deductHP() {
      this.hitpoints -= 1;

      if (this.hitpoints == 2) {
        //first hit
        this.HPBar.innerHTML = "<img src=\"HPoof.png\">";
      } else if (this.hitpoints == 1) {
        //second hit
        this.HPBar.innerHTML = "<img src=\"HPdanger.png\">";
      } else if (this.hitpoints == 0) {
        //KO!
        this.HPBar.innerHTML = "<img src=\"HPzero.png\">";
      }
    }
  }, {
    key: "increaseEnergy",
    value: function increaseEnergy() {
      this.energy += 10;
      this.energybar.innerHTML = "Energy: ".concat(this.energy); //enable supers and re-assign classes to buttons.

      if (this.energy >= 30) {
        this.canHyperBeam = true;
        this.hyperbeambutton.classList.add("".concat(this.name, "__hyperbeamOn"));
        this.hyperbeambutton.classList.remove("".concat(this.name, "__hyperbeamOff"));
      }

      if (this.energy >= 40) {
        this.canExplode = true;
        this.explosionbutton.classList.add("".concat(this.name, "__explosionOn"));
        this.explosionbutton.classList.remove("".concat(this.name, "__explosionOff"));
      }

      if (this.energy >= 50) {
        this.canHomerun = true;
        this.homerunbutton.classList.add("".concat(this.name, "__homerunOn"));
        this.homerunbutton.classList.remove("".concat(this.name, "__homerunOff"));
      }
    }
  }, {
    key: "useHyperBeam",
    value: function useHyperBeam() {
      this.energy -= 30;

      if (this.energy < 0) {
        this.energy = 0;
      }

      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false;
        this.hyperbeambutton.classList.add("".concat(this.name, "__hyperbeamOff"));
        this.hyperbeambutton.classList.remove("".concat(this.name, "__hyperbeamOn"));
      }

      if (this.energy < 40) {
        this.canExplode = false;
        this.explosionbutton.classList.add("".concat(this.name, "__explosionOff"));
        this.explosionbutton.classList.remove("".concat(this.name, "__explosionOn"));
      }

      if (this.energy < 50) {
        this.canHomerun = false;
        this.homerunbutton.classList.add("".concat(this.name, "__homerunOff"));
        this.homerunbutton.classList.remove("".concat(this.name, "__homerunOn"));
      }
    }
  }, {
    key: "useExplosion",
    value: function useExplosion() {
      this.energy -= 40;

      if (this.energy < 0) {
        this.energy = 0;
      }

      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false;
        this.hyperbeambutton.classList.add("".concat(this.name, "__hyperbeamOff"));
        this.hyperbeambutton.classList.remove("".concat(this.name, "__hyperbeamOn"));
      }

      if (this.energy < 40) {
        this.canExplode = false;
        this.explosionbutton.classList.add("".concat(this.name, "__explosionOff"));
        this.explosionbutton.classList.remove("".concat(this.name, "__explosionOn"));
      }

      if (this.energy < 50) {
        this.canHomerun = false;
        this.homerunbutton.classList.add("".concat(this.name, "__homerunOff"));
        this.homerunbutton.classList.remove("".concat(this.name, "__homerunOn"));
      }
    }
  }, {
    key: "useHomerun",
    value: function useHomerun() {
      this.energy -= 50;

      if (this.energy < 0) {
        this.energy = 0;
      }

      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false;
        this.hyperbeambutton.classList.add("".concat(this.name, "__hyperbeamOff"));
        this.hyperbeambutton.classList.remove("".concat(this.name, "__hyperbeamOn"));
      }

      if (this.energy < 40) {
        this.canExplode = false;
        this.explosionbutton.classList.add("".concat(this.name, "__explosionOff"));
        this.explosionbutton.classList.remove("".concat(this.name, "__explosionOn"));
      }

      if (this.energy < 50) {
        this.canHomerun = false;
        this.homerunbutton.classList.add("".concat(this.name, "__homerunOff"));
        this.homerunbutton.classList.remove("".concat(this.name, "__homerunOn"));
      }
    }
  }]);

  return Fighter;
}(); //Fighters


var playerOne = new Fighter("playerone", playerOneHPBar);
var playerTwo = new Fighter("playertwo", playerTwoHPBar); //test to check if function works
//playerOne.deductHP();
//console.log(playerOne);
//Functions that randomly determine P2's attack. playerTwo will always be passed as the parameter.

var playerTwoAttacks = function playerTwoAttacks(result) {
  if (result == 0) {
    playerTwoSprite.innerHTML = "<img src=\"beam.png\">";
    playerTwo.increaseEnergy();
    return "Beam";
  } else if (result == 1) {
    playerTwoSprite.innerHTML = "<img src=\"blast.png\">";
    playerTwo.increaseEnergy();
    return "Blast";
  } else if (result == 2) {
    playerTwoSprite.innerHTML = "<img src=\"baseballbat.png\">";
    playerTwo.increaseEnergy();
    return "Baseball Bat";
  } else if (result == 3) {
    playerTwoSprite.innerHTML = "<img src=\"hyperbeam.png\">";
    playerTwo.useHyperBeam();
    return "Hyper Beam";
  } else if (result == 4) {
    playerTwoSprite.innerHTML = "<img src=\"explosion.png\">";
    playerTwo.useExplosion();
    return "Explosion";
  } else if (result == 5) {
    playerTwoSprite.innerHTML = "<img src=\"homerun.png\">";
    playerTwo.useHomerun();
    return "Homerun";
  }
};

var playerTwoAttackChoice = function playerTwoAttackChoice(fighter) {
  if (fighter.energy >= 50) {
    var diceroll = Math.floor(Math.random() * 6);
    return diceroll;
  } else if (fighter.energy >= 40) {
    var _diceroll = Math.floor(Math.random() * 5);

    return _diceroll;
  } else if (fighter.energy >= 30) {
    var _diceroll2 = Math.floor(Math.random() * 4);

    return _diceroll2;
  } else {
    var _diceroll3 = Math.floor(Math.random() * 3);

    return _diceroll3;
  }
}; //test to check if function works
//(run this function in the buttons and let it return a value simultaneously to determine outcome)
//console.log(playerTwoAttacks(playerTwoAttackChoice(playerTwo)));
//Event listeners to use P1's attacks and advance game state


beam.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {
    //Player 2's attack
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo)); //(play sound effect, optional)
    //P1's attack

    playerOneSprite.innerHTML = "<img src=\"beamLeft.png\">"; //increaseEnergy()/useSuper()

    playerOne.increaseEnergy(); //change dialogue and use deductHP() based on outcome, + change victory code to true and change sprites if one side loses all hp

    if (p2attack == "Baseball Bat" || p2attack == "Homerun" || p2attack == "Hyper Beam") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "You lost! Your BEAM was handily beaten by a ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "Your opponent deflects your BEAM with a ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Beam") {
      dialogueHeadline.innerHTML = "Both fighters used BEAM!";
      dialogueFlavourText.innerHTML = "The beams collide, resulting in no damage.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "Your BEAM shoots through your opponent's ".concat(p2attack, " and scores a direct hit!");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "Your BEAM cuts through the opponent's ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});
blast.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"blastLeft.png\">";
    playerOne.increaseEnergy();

    if (p2attack == "Beam" || p2attack == "Hyper Beam" || p2attack == "Explosion") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "Your opponent quashes your BLAST with a ".concat(p2attack, ", and you lose!");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "Your opponent shoots through your BLAST with a ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Blast") {
      dialogueHeadline.innerHTML = "Both fighters used BLAST!";
      dialogueFlavourText.innerHTML = "Somehow, the explosions cancel each other out, resulting in no damage.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "Your BLAST rumbles right through your opponent's ".concat(p2attack, "!");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "Your BLAST cares not for the opponent's ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});
baseball.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"baseballbatLeft.png\">";
    playerOne.increaseEnergy();

    if (p2attack == "Blast" || p2attack == "Explosion" || p2attack == "Homerun") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "Strike 3 from a ".concat(p2attack, ", and you're out!");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "Your opponent ignores your illustrious baseball bat with a ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Baseball Bat") {
      dialogueHeadline.innerHTML = "Both fighters used BASEBALL!";
      dialogueFlavourText.innerHTML = "No damage was taken, but the audience is very impressed.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "You overcome your opponent's ".concat(p2attack, " through the power of baseball!");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "You swing and send the opponent's ".concat(p2attack, " right back their way! Nice one!");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});
hyperbeam.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && playerOne.canHyperBeam == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"hyperbeamLeft.png\">";
    playerOne.useHyperBeam();

    if (p2attack == "Baseball Bat" || p2attack == "Homerun") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "Even with your strongest HYPER BEAM, you unfortunately lose to your opponent's ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "Your fearsome HYPER BEAM is fearlessly deflected by your opponent's ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Hyper Beam") {
      dialogueHeadline.innerHTML = "Both fighters duked it out with a HYPER BEAM!";
      dialogueFlavourText.innerHTML = "But they're evenly matched. Now they're a bit sad they couldn't show off.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "You easily overcome your opponent's ".concat(p2attack, " through the sheer determination pulsing in your HYPER BEAM.");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "Your powerful HYPER BEAM has no trouble overpowering your opponent's ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});
explosion.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && playerOne.canExplode == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"explosionLeft.png\">";
    playerOne.useExplosion();

    if (p2attack == "Beam" || p2attack == "Hyper Beam") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "Even your coolest EXPLOSION couldn't save you from a ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "Flaring up an awesome EXPLOSION unfortunately does not stop ".concat(p2attack, "s from hitting you.");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Explosion") {
      dialogueHeadline.innerHTML = "Both fighters finger-snapped their coolest EXPLOSION!";
      dialogueFlavourText.innerHTML = "Neither of them took damage, but they're having fun nonetheless.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "You snap your fingers and completely overwhelm your opponent's ".concat(p2attack, " with the coolest EXPLOSION imaginable.");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "Why bother with ".concat(p2attack, "s when you've got EXPLOSIONS?!");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});
homerun.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && playerOne.canHomerun == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"homerunLeft.png\">";
    playerOne.useHomerun();

    if (p2attack == "Blast" || p2attack == "Explosion") {
      playerOne.deductHP();

      if (playerOne.hitpoints == 0) {
        p2Victory = true;
        playerOneSprite.innerHTML = "<img src=\"defeatedLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"victory.png\">";
        dialogueHeadline.innerHTML = "You make a HOMERUN that'd awe any baseball team... but it isn't enough to beat an ".concat(p2attack, ".");
        dialogueFlavourText.innerHTML = "Better luck next time! Refresh the page to try again.";
      } else {
        dialogueHeadline.innerHTML = "You ready your bat and swing the ultimate, all-out HOMERUN... which unfortunately still can't deflect ".concat(p2attack, "s.");
        dialogueFlavourText.innerHTML = "You take 1 damage.";
      }
    } else if (p2attack == "Homerun") {
      dialogueHeadline.innerHTML = "Both fighters stepped up to the bat with a world-record HOMERUN!";
      dialogueFlavourText.innerHTML = "The clash was so intense that it made a new star in the sky. Neither of them took damage, though.";
    } else {
      playerTwo.deductHP();

      if (playerTwo.hitpoints == 0) {
        p1Victory = true;
        playerOneSprite.innerHTML = "<img src=\"victoryLeft.png\">";
        playerTwoSprite.innerHTML = "<img src=\"defeated.png\">";
        dialogueHeadline.innerHTML = "You make a HOMERUN so powerful that it instantly crushes your opponent's ".concat(p2attack, "!");
        dialogueFlavourText.innerHTML = "YOU WIN! Refresh the page for another round.";
      } else {
        dialogueHeadline.innerHTML = "You stare down your opponent's ".concat(p2attack, ", take a deep breath... and give it a HOMERUN!");
        dialogueFlavourText.innerHTML = "Your opponent takes 1 damage.";
      }
    }
  }
});