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
//  Normals
const beam = document.getElementsByClassName("regularbutton")[0];
const blast = document.getElementsByClassName("regularbutton")[1];
const baseball = document.getElementsByClassName("regularbutton")[2];
//  Supers
const hyperbeam = document.getElementsByClassName("superbutton")[0];
const explosion = document.getElementsByClassName("superbutton")[1];
const homerun = document.getElementsByClassName("superbutton")[2];

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
}

//Fighters
const playerOne = new Fighter(playerOneHPBar);
const playerTwo = new Fighter(playerTwoHPBar);

//test to check if function works
//playerOne.deductHP();
//console.log(playerOne);


//Event listeners to use attacks and advance game state
beam.addEventListener("click", () => {

})
blast.addEventListener("click", () => {
    
})
baseball.addEventListener("click", () => {
    
})
hyperbeam.addEventListener("click", () => {
    if (p1CanHyperBeam == true){
        
    }
})
explosion.addEventListener("click", () => {
    if (p1CanExplode == true){
        
    }  
})
homerun.addEventListener("click", () => {
    if (p1CanHomerun == true){
        
    }  
})