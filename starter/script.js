'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//dice elemnt 
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice
btnRoll.addEventListener('click', function(){
    //1 generate the number
    const dice = Math.trunc(Math.random() * 5) + 1;
    console.log(dice);

    //2 display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check (rolled 1?)
    if(dice !== 1){
       currentScore += dice;
       current0El.textContent = currentScore;
    }
    else {
        //switch player
    }

});
