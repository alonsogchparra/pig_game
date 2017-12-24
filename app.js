var scores, roundScore, activatePlayer, diceOne, diceTwo, gamePlaying, diceSixTwice, input;

init();


document.getElementById('dice-0').style.display = 'none';
document.getElementById('dice-1').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
  
  if(gamePlaying) {
    
    diceOne = Math.floor(Math.random() * 6) + 1;
    diceTwo = Math.floor(Math.random() * 6) + 1;
    
    if(diceOne === 6 || diceTwo === 6 )
      diceSixTwice++;
    else if (diceOne && diceTwo === 6 )
      diceSixTwice = 2;
    
    console.log('diceSixTwice', diceSixTwice);

    var diceDOM = document.getElementById('dice-0');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + diceOne + '.png';
    
    var diceTwoDOM = document.getElementById('dice-1');
    diceTwoDOM.style.display = 'block';
    diceTwoDOM.src = 'dice-' + diceTwo + '.png';
    
    if (diceSixTwice === 2) {
      
      nextPlayer();
      document.querySelector('#current-' + activatePlayer).textContent = '0';
      scores[activatePlayer] = 0;
      
    } else if (diceOne !== 1 && diceTwo !== 1) {

      roundScore += (diceOne + diceTwo);
      document.querySelector('#current-' + activatePlayer).textContent = roundScore;
      
    } else {

      nextPlayer();

    }
    
  }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
  
if(gamePlaying) {
  
  scores[activatePlayer] += roundScore;
  
  document.querySelector('#score-' + activatePlayer).textContent = scores[activatePlayer];
  
   if(input === '' || input === undefined) {
    input = 30;
  } else {
    input = document.querySelector('.final-score').value;
  }
  
//  if(scores[activatePlayer] >= 20) {
  if(scores[activatePlayer] >= input) {
    document.querySelector('#name-' + activatePlayer).textContent = 'Winner!';
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.querySelector('.player-' + activatePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activatePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    
    nextPlayer();
    
  }
  
}
    
});

function nextPlayer() {
  
  activatePlayer === 0 ? activatePlayer = 1 : activatePlayer = 0;
  roundScore = 0;
  diceSixTwice = 0;
    
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-0').style.display = 'none';
  document.getElementById('dice-1').style.display = 'none';
  
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  
  scores = [0,0];
  roundScore = 0;
  activatePlayer = 0;
  gamePlaying = true; 
  diceSixTwice = 0;
  
  
  document.getElementById('dice-0').style.display = 'none';
  document.getElementById('dice-1').style.display = 'none';
  
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
  
}