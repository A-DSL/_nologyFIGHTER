//JS will include:
//-A class that will be used for the two fighters. This consists of a HP value, Energy value, and three functions for altering these values (HP loss, Energy gain, Energy loss from Super). 
//Event listeners for all of P1's buttons, for performing each attack and determining the random attack P2 will use. This will change image indexing and call the fighter class functions based on if statements. It will also affect various toggles based on Energy count, which grant access to Supers.
//P2's buttons are purely cosmetic and should only change to highlight when their Supers are available.

//Values to toggle for when victory/loss occurs.
let p1Victory = false;
let p2Victory = false;

//Accessor variables for HTML code.
//  HP Bars
const playerOneHPBar = document.querySelector(".playerone__HP");
const playerTwoHPBar = document.querySelector(".playertwo__HP");
// Player Sprites
const playerOneSprite = document.querySelector(".playerone__image");
const playerTwoSprite = document.querySelector(".playertwo__image");
//  P1 Normals
const beam = document.getElementsByClassName("regularbutton")[0];
const blast = document.getElementsByClassName("regularbutton")[1];
const baseball = document.getElementsByClassName("regularbutton")[2];
//  P1 Supers
const hyperbeam = document.getElementsByClassName("superbutton")[0];
const explosion = document.getElementsByClassName("superbutton")[1];
const homerun = document.getElementsByClassName("superbutton")[2];
//  Dialogue
const dialogue = document.querySelector(".dialogue");
const dialogueHeadline = document.querySelector(".dialogue__headline");
const dialogueFlavourText = document.querySelector(".dialogue__flavourtext");

//Fighter Class. Functions for losing HP, gaining Energy, and losing Energy.
class Fighter {
    constructor(name, HPBar){
        //sneaky variable meant to access player-specific Energy/Super tags in HTML
        this.name = name;
        this.energybar = document.querySelector(`.${this.name}__energy`);
        this.hyperbeambutton = document.querySelector(`.${this.name}__hyperbeamOff`);
        this.explosionbutton = document.querySelector(`.${this.name}__explosionOff`);
        this.homerunbutton = document.querySelector(`.${this.name}__homerunOff`);

        this.hitpoints = 3;
        this.energy = 0;
        //Class can modify HP Bar HTML.
        this.HPBar = HPBar;
        //Toggles for supers.
        this.canHyperBeam = false;
        this.canExplode = false;
        this.canHomerun = false;
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
        this.energybar.innerHTML = `Energy: ${this.energy}`;
        //enable supers and re-assign classes to buttons.
        if (this.energy >= 30){
            this.canHyperBeam = true;
            this.hyperbeambutton.classList.add(`${this.name}__hyperbeamOn`);
            this.hyperbeambutton.classList.remove(`${this.name}__hyperbeamOff`);
        }
        if (this.energy >= 40){
            this.canExplode = true;
            this.explosionbutton.classList.add(`${this.name}__explosionOn`);
            this.explosionbutton.classList.remove(`${this.name}__explosionOff`);
        }
        if (this.energy >= 50){
            this.canHomerun = true;
            this.homerunbutton.classList.add(`${this.name}__homerunOn`);
            this.homerunbutton.classList.remove(`${this.name}__homerunOff`);
        }
    }
    useHyperBeam() {
        this.energy -= 30;
        this.energybar.innerHTML = `Energy: ${this.energy}`;
        //disable supers and re-assign classes to buttons.
        if (this.energy < 30){
            this.canHyperBeam = false;
            this.hyperbeambutton.classList.add(`${this.name}__hyperbeamOff`);
            this.hyperbeambutton.classList.remove(`${this.name}__hyperbeamOn`);
        }
        if (this.energy < 40){
            this.canExplode = false;
            this.explosionbutton.classList.add(`${this.name}__explosionOff`);
            this.explosionbutton.classList.remove(`${this.name}__explosionOn`);
        }
        if (this.energy < 50){
            this.canHomerun = false;
            this.homerunbutton.classList.add(`${this.name}__homerunOff`);
            this.homerunbutton.classList.remove(`${this.name}__homerunOn`);
        }
    }
    useExplosion() {
        this.energy -= 40;
        this.energybar.innerHTML = `Energy: ${this.energy}`;
        //disable supers and re-assign classes to buttons.
        if (this.energy < 30){
            this.canHyperBeam = false;
            this.hyperbeambutton.classList.add(`${this.name}__hyperbeamOff`);
            this.hyperbeambutton.classList.remove(`${this.name}__hyperbeamOn`);
        }
        if (this.energy < 40){
            this.canExplode = false;
            this.explosionbutton.classList.add(`${this.name}__explosionOff`);
            this.explosionbutton.classList.remove(`${this.name}__explosionOn`);
        }
        if (this.energy < 50){
            this.canHomerun = false;
            this.homerunbutton.classList.add(`${this.name}__homerunOff`);
            this.homerunbutton.classList.remove(`${this.name}__homerunOn`);
        }
    }
    useHomerun() {
        this.energy -= 50;
        this.energybar.innerHTML = `Energy: ${this.energy}`;
        //disable supers and re-assign classes to buttons.
        if (this.energy < 30){
            this.canHyperBeam = false;
            this.hyperbeambutton.classList.add(`${this.name}__hyperbeamOff`);
            this.hyperbeambutton.classList.remove(`${this.name}__hyperbeamOn`);
        }
        if (this.energy < 40){
            this.canExplode = false;
            this.explosionbutton.classList.add(`${this.name}__explosionOff`);
            this.explosionbutton.classList.remove(`${this.name}__explosionOn`);
        }
        if (this.energy < 50){
            this.canHomerun = false;
            this.homerunbutton.classList.add(`${this.name}__homerunOff`);
            this.homerunbutton.classList.remove(`${this.name}__homerunOn`);
        }
    }
}

//Fighters
const playerOne = new Fighter("playerone", playerOneHPBar);
const playerTwo = new Fighter("playertwo", playerTwoHPBar);
//test to check if function works
//playerOne.deductHP();
//console.log(playerOne);

//Functions that randomly determine P2's attack. playerTwo will always be passed as the parameter.
const playerTwoAttacks = (result) => {
    if (result == 0){
        playerTwoSprite.innerHTML = `<img src="beam.png">`;
        playerTwo.increaseEnergy();
        return "Beam";
    }
    else if (result == 1){
        playerTwoSprite.innerHTML = `<img src="blast.png">`;
        playerTwo.increaseEnergy();
        return "Blast";
    }
    else if (result == 2){
        playerTwoSprite.innerHTML = `<img src="baseballbat.png">`;
        playerTwo.increaseEnergy();
        return "Baseball Bat";
    }
    else if (result == 3){
        playerTwoSprite.innerHTML = `<img src="hyperbeam.png">`;
        playerTwo.useHyperBeam();
        return "Hyper Beam";
    }
    else if (result == 4){
        playerTwoSprite.innerHTML = `<img src="explosion.png">`;
        playerTwo.useExplosion();
        return "Explosion";
    }
    else if (result == 5){
        playerTwoSprite.innerHTML = `<img src="homerun.png">`;
        playerTwo.useHomerun();
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
//(run this function in the buttons and let it return a value simultaneously to determine outcome)
//console.log(playerTwoAttacks(playerTwoAttackChoice(playerTwo)));

//Event listeners to use P1's attacks and advance game state
beam.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
        //Player 2's attack
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));
        //(play sound effect, optional)
        //P1's attack
        playerOneSprite.innerHTML = `<img src="beamLeft.png">`;
        //increaseEnergy()/useSuper()
        playerOne.increaseEnergy();
        //change dialogue and use deductHP() based on outcome, + change victory code to true and change sprites if one side loses all hp
        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }
})
blast.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));

        playerOneSprite.innerHTML = `<img src="blastLeft.png">`;
        playerOne.increaseEnergy();  
        
        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }    
})
baseball.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false){
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));

        playerOneSprite.innerHTML = `<img src="baseballbatLeft.png">`; 
        playerOne.increaseEnergy();           

        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }    
})
hyperbeam.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && playerOne.canHyperBeam == true){
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));

        playerOneSprite.innerHTML = `<img src="hyperbeamLeft.png">`;    
        playerOne.useHyperBeam();  

        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }
})
explosion.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && playerOne.canExplode == true){
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));

        playerOneSprite.innerHTML = `<img src="explosionLeft.png">`;   
        playerOne.useExplosion();
        
        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }  
})
homerun.addEventListener("click", () => {
    if (p1Victory == false && p2Victory == false
    && playerOne.canHomerun == true){
        let p2attack = playerTwoAttacks(playerTwoAttackChoice(playerTwo));

        playerOneSprite.innerHTML = `<img src="homerunLeft.png">`;   
        playerOne.useHomerun();
        
        if (p2attack == "Baseball Bat" || p2attack == "Homerun" || 
        p2attack == "Hyper Beam"){
            playerOne.deductHP();
        } else if (p2attack == "Beam"){

        } else{
            playerTwo.deductHP();
        }
    }  
})