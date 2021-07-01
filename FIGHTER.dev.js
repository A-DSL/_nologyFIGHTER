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
    this.energybar = document.querySelector(".".concat(name, "__energy"));
    this.hyperbeambutton = document.querySelector(".".concat(name, "__hyperbeam"));
    this.explosionbutton = document.querySelector(".".concat(name, "__explosion"));
    this.homerunbutton = document.querySelector(".".concat(name, "__homerun"));
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
        this.canHyperBeam = true; //this.hyperbeambutton.innerHTML = `<button class="highlightedsuperbutton">Hyper Beam</button>`;
      }

      if (this.energy >= 40) {
        this.canExplode = true; //this.explosionbutton.innerHTML = `<button class="highlightedsuperbutton">Explosion</button>`;
      }

      if (this.energy >= 50) {
        this.canHomerun = true; //this.homerunbutton.innerHTML = `<button class="highlightedsuperbutton">Homerun</button>`;
      }
    }
  }, {
    key: "useHyperBeam",
    value: function useHyperBeam() {
      this.energy -= 30;
      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false; //this.hyperbeambutton.innerHTML = `<button class="superbutton">Hyper Beam</button>`;
      }

      if (this.energy < 40) {
        this.canExplode = false; //this.explosionbutton.innerHTML = `<button class="superbutton">Explosion</button>`;
      }

      if (this.energy < 50) {
        this.canHomerun = false; //this.homerunbutton.innerHTML = `<button class="superbutton">Homerun</button>`;
      }
    }
  }, {
    key: "useExplosion",
    value: function useExplosion() {
      this.energy -= 40;
      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false; //this.hyperbeambutton.innerHTML = `<button class="superbutton">Hyper Beam</button>`;
      }

      if (this.energy < 40) {
        this.canExplode = false; //this.explosionbutton.innerHTML = `<button class="superbutton">Explosion</button>`;
      }

      if (this.energy < 50) {
        this.canHomerun = false; //this.homerunbutton.innerHTML = `<button class="superbutton">Homerun</button>`;
      }
    }
  }, {
    key: "useHomerun",
    value: function useHomerun() {
      this.energy -= 50;
      this.energybar.innerHTML = "Energy: ".concat(this.energy); //disable supers and re-assign classes to buttons.

      if (this.energy < 30) {
        this.canHyperBeam = false; //this.hyperbeambutton.innerHTML = `<button class="superbutton">Hyper Beam</button>`;
      }

      if (this.energy < 40) {
        this.canExplode = false; //this.explosionbutton.innerHTML = `<button class="superbutton">Explosion</button>`;
      }

      if (this.energy < 50) {
        this.canHomerun = false; //this.homerunbutton.innerHTML = `<button class="superbutton">Homerun</button>`;
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
    //determine p2's attack + sprite through RNG functions
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo)); //(play sound effect, optional)
    //change p1 sprite

    playerOneSprite.innerHTML = "<img src=\"beamLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.increaseEnergy(); //change dialogue and use deductHP() based on outcome, + change victory code to true and change sprites if one side loses all hp  
  }
});
blast.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"blastLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.increaseEnergy();
  }
});
baseball.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"baseballbatLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.increaseEnergy();
  }
});
hyperbeam.addEventListener("click", function () {
  console.log(playerOne.canHyperBeam);

  if (p1Victory == false && p2Victory == false && playerOne.canHyperBeam == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"hyperbeamLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.useHyperBeam();
  }
});
explosion.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && playerOne.canExplode == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"explosionLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.useExplosion();
  }
});
homerun.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && playerOne.canHomerun == true) {
    var p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
    playerOneSprite.innerHTML = "<img src=\"homerunLeft.png\">"; //increaseEnergy()/useSuper() for each side to monitor Energy and toggle super availability. also adds classes if energy reaches certain amount.

    playerOne.useHomerun();
  }
});