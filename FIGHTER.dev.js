"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//JS will include:
//-A class that will be used for the two fighters. This consists of a HP value, Energy value, and three functions for altering these values (HP loss, Energy gain, Energy loss from Super). 
//Event listeners for all of P1's buttons, for performing each attack and determining the random attack P2 will use. This will change image indexing and call the fighter class functions based on if statements. It will also affect various toggles based on Energy count, which grant access to Supers.
//P2's buttons are purely cosmetic and should only change to highlight when their Supers are available.
//Accessor variables for HTML code.
//  HP Bars
var playerOneHPBar = document.querySelector(".playerone__HP");
var playerTwoHPBar = document.querySelector(".playertwo__HP"); //  Normals

var beam = document.getElementsByClassName("regularbutton")[0];
var blast = document.getElementsByClassName("regularbutton")[1];
var baseball = document.getElementsByClassName("regularbutton")[2]; //  Supers

var hyperbeam = document.getElementsByClassName("superbutton")[0];
var explosion = document.getElementsByClassName("superbutton")[1];
var homerun = document.getElementsByClassName("superbutton")[2]; //Fighter Class. Functions for losing HP, gaining Energy, and losing Energy.

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
  }]);

  return Fighter;
}(); //Fighters


var playerOne = new Fighter(playerOneHPBar);
var playerTwo = new Fighter(playerTwoHPBar); //test to check if function works
//playerOne.deductHP();
//console.log(playerOne);