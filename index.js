// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const currScore1El = document.querySelector('#current--0');
const currScore2El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let scores, currScore, activePlayer, playing;

// add event listeners to buttons
btnHold.addEventListener('click', function(){
    // 1. add current score to active player
    // 2. Finish the game
    // 3. switch to the next player

    if(playing && currScore){
        scores[activePlayer] += currScore;
        console.log(scores)
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else
            switchPlayer()
    }
})
const init = function(){
    scores = [0, 0];
    currScore = 0;
    activePlayer = 0; // 0 -> player 1 and 1 -> player 2
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currScore1El.textContent = 0;
    currScore2El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

// on page load
init()

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
btnRollDice.addEventListener('click', function(){
    if(playing){
        const diceNumberGenerated = Math.floor(Math.random() * 6) + 1
        console.log("clicked rolled", diceNumberGenerated);
        diceEl.src = `images/dice-${diceNumberGenerated}.png`;
        diceEl.classList.remove('hidden');
        if(diceNumberGenerated !== 1){
            // add dice generated to current score
            currScore += diceNumberGenerated;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        } else {
            // switch to next player
            switchPlayer()
        }
    }
})

btnNewGame.addEventListener('click', function(){
    // reset the game
    // my solution
    // console.log("clicked");
    // currScore = 0;
    // scores = [0, 0];
    // activePlayer = 0;
    // playing = true;
    // score0El.textContent = 0
    // score1El.textContent = 0
    // currScore1El.textContent = 0
    // currScore2El.textContent = 0
    // diceEl.classList.add('hidden');
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    // other solution
    init();
})
