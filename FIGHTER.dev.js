"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//JS will include:
//-A class that will be used for the two fighters. This consists of a HP value, Energy value, and three functions for altering these values (HP loss, Energy gain, Energy loss from Super). 
//Event listeners for all of P1's buttons, for performing each attack and determining the random attack P2 will use. This will change image indexing and call the fighter class functions based on if statements. It will also affect various toggles based on Energy count, which grant access to Supers.
//P2's buttons are purely cosmetic and should only change to highlight when their Supers are available.
//Values to toggle for when supers are available or when victory/loss occurs.
var p1CanHyperBeam = false;
var p1CanExplode = false;
var p1CanHomerun = false;
var p2CanHyperBeam = false;
var p2CanExplode = false;
var p2CanHomerun = false;
var p1Victory = false;
var p2Victory = false; //Accessor variables for HTML code.
//  HP Bars

var playerOneHPBar = document.querySelector(".playerone__HP");
var playerTwoHPBar = document.querySelector(".playertwo__HP"); // Player Sprites

var playerOneSprite = document.querySelector(".playerone__image");
var playerTwoSprite = document.querySelector(".playertwo__image"); //  Normals

var beam = document.getElementsByClassName("regularbutton")[0];
var blast = document.getElementsByClassName("regularbutton")[1];
var baseball = document.getElementsByClassName("regularbutton")[2]; //  Supers

var hyperbeam = document.getElementsByClassName("superbutton")[0];
var explosion = document.getElementsByClassName("superbutton")[1];
var homerun = document.getElementsByClassName("superbutton")[2]; //  Dialogue

var dialogue = document.querySelector(".dialogue");
var dialogueHeadline = document.querySelector(".dialogue__headline");
var dialogueFlavourText = document.querySelector(".dialogue__flavourtext"); //Fighter Class. Functions for losing HP, gaining Energy, and losing Energy.

var Fighter =
/*#__PURE__*/
function () {
  function Fighter(HPBar) {
    _classCallCheck(this, Fighter);

    this.hitpoints = 3;
    this.energy = 0; //Class can modify HP Bar HTML.

    this.HPBar = HPBar;
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
    }
  }, {
    key: "useHyperBeam",
    value: function useHyperBeam() {
      this.energy -= 30;
    }
  }, {
    key: "useExplosion",
    value: function useExplosion() {
      this.energy -= 40;
    }
  }, {
    key: "useHomerun",
    value: function useHomerun() {
      this.energy -= 50;
    }
  }]);

  return Fighter;
}(); //Fighters


var playerOne = new Fighter(playerOneHPBar);
var playerTwo = new Fighter(playerTwoHPBar); //test to check if function works
//playerOne.deductHP();
//console.log(playerOne);
//Functions that randomly determine P2's attack. playerTwo will always be passed as the parameter.

var playerTwoAttacks = function playerTwoAttacks(result) {
  if (result == 0) {
    return "Beam";
  } else if (result == 1) {
    return "Blast";
  } else if (result == 2) {
    return "Baseball Bat";
  } else if (result == 3) {
    return "Hyper Beam";
  } else if (result == 4) {
    return "Explosion";
  } else if (result == 5) {
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
}; //Event listeners to use P1's attacks and advance game state


beam.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {//determine p2's attack through RNG functions
    //(play sound effect, optional)
    //change sprites
    //increaseEnergy()/useSuper() for each side to monitor Energy
    //add classes and toggle super availability if energy reaches certain amount
    //change dialogue and use deductHP() based on outcome, + change victory code to true if one side loses all hp  
  }
});
blast.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {}
});
baseball.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false) {}
});
hyperbeam.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && p1CanHyperBeam == true) {}
});
explosion.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && p1CanExplode == true) {}
});
homerun.addEventListener("click", function () {
  if (p1Victory == false && p2Victory == false && p1CanHomerun == true) {}
});