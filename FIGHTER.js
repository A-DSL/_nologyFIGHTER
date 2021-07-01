//JS will include:
//-A class that will be used for the two fighters. This consists of a HP value, Energy value, and three functions for altering these values (HP loss, Energy gain, Energy loss from Super). 
//Event listeners for all of P1's buttons, for performing each attack and determining the random attack P2 will use. This will change image indexing and call the fighter class functions based on if statements. It will also affect various toggles based on Energy count, which grant access to Supers.
//P2's buttons are purely cosmetic and should only change to highlight when their Supers are available.

//Values to toggle for when supers are available or when victory/loss occurs.
let p1CanHyperBeam = false;
let p1CanExplode = false;
let p1CanHomerun = false;

let p2CanHyperBeam = false;
let p2CanExplode = false;
let p2CanHomerun = false;

let p1Victory = false;
let p2Victory = false;

//Accessor variables for HTML code.
//  HP Bars
const playerOneHPBar = document.querySelector(".playerone__HP")
const playerTwoHPBar = document.querySelector(".playertwo__HP")
// Player Sprites
const playerOneSprite = document.querySelector(".playerone__image")
const playerTwoSprite = document.querySelector(".playertwo__image")
//  Normals
const beam = document.getElementsByClassName("regularbutton")[0];
const blast = document.getElementsByClassName("regularbutton")[1];
const baseball = document.getElementsByClassName("regularbutton")[2];
//  Supers
const hyperbeam = document.getElementsByClassName("superbutton")[0];
const explosion = document.getElementsByClassName("superbutton")[1];
const homerun = document.getElementsByClassName("superbutton")[2];
//  Dialogue
const dialogue = document.querySelector(".dialogue");
const dialogueHeadline = document.querySelector(".dialogue__headline");
const dialogueFlavourText = document.querySelector(".dialogue__flavourtext");

//Fighter Class. Functions for losing HP, gaining Energy, and losing Energy.
class Fighter {
    constructor(HPBar){
        this.hitpoints = 3;
        this.energy = 0;
        //Class can modify HP Bar HTML.
        this.HPBar = HPBar;    
    }

    deductHP() {
        this.hitpoints -= 1;
        if (this.hitpoints == 2){
            //first hit
            this.HPBar.innerHTML = `<img src="HPoof.png">`
        }
        else if (this.hitpoints == 1){
            //second hit
            this.HPBar.innerHTML = `<img src="HPdanger.png">`
        }
        else if (this.hitpoints == 0){
            //KO!
            this.HPBar.innerHTML = `<img src="HPzero.png">`
        }
    }

    increaseEnergy() {
        this.energy += 10;
    }
    useHyperBeam() {
        this.energy -= 30;
    }
    useExplosion() {
        this.energy -= 40;
    }
    useHomerun() {
        this.energy -= 50;
    }
}

//Fighters
const playerOne = new Fighter(playerOneHPBar);
const playerTwo = new Fighter(playerTwoHPBar);
//test to check if function works
//playerOne.deductHP();
//console.log(playerOne);

//Functions that randomly determine P2's attack. playerTwo will always be passed as the parameter.
const playerTwoAttacks = (result) => {
    if (result == 0){
        playerTwoSprite.innerHTML = `<img src="beam.png">`;
        return "Beam";
    }
    else if (result == 1){
        playerTwoSprite.innerHTML = `<img src="blast.png">`;
        return "Blast";
    }
    else if (result == 2){
        playerTwoSprite.innerHTML = `<img src="baseballbat.png">`;
        return "Baseball Bat";
    }
    else if (result == 3){
        playerTwoSprite.innerHTML = `<img src="hyperbeam.png">`;
        return "Hyper Beam";
    }
    else if (result == 4){
        playerTwoSprite.innerHTML = `<img src="explosion.png">`;
        return "Explosion";
    }
    else if (result == 5){
        playerTwoSprite.innerHTML = `<img src="homerun.png">`;
        return "Homerun";
    }
}
const playerTwoAttackChoice = (fighter) => {
    if (fighter.energy >= 50){
        let diceroll = Math.floor(Math.random() * 6);
        return diceroll;
    } else if (fighter.energy >= 40){
        let diceroll = Math.floor(Math.random() * 5);
        return diceroll;
    } else if (fighter.energy >= 30){
        let diceroll = Math.floor(Math.random() * 4);
        return diceroll;
    } else{
        let diceroll = Math.floor(Math.random() * 3);
        return diceroll;
    }
}
//test to check if function works
//console.log(playerTwoAttacks(playerTwoAttackChoice(playerTwo)));

//Event listeners to use P1's attacks and advance game state
beam.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
        //determine p2's attack through RNG functions
        //(play sound effect, optional)
        //change sprites
        //increaseEnergy()/useSuper() for each side to monitor Energy
        //add classes and toggle super availability if energy reaches certain amount
        //change dialogue and use deductHP() based on outcome, + change victory code to true and change sprites if one side loses all hp  
    }
})
blast.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
            
    }    
})
baseball.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
            
    }    
})
hyperbeam.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && p1CanHyperBeam == true){
        
    }
})
explosion.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && p1CanExplode == true){
        
    }  
})
homerun.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && p1CanHomerun == true){
        
    }  
})