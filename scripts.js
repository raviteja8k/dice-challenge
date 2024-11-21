// console.log('hi');

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

// Pick a random dice image based on the random number
const randomDiceImage = `images/dice${randomNumber1}.png`;
const randomDiceImage2 = `images/dice${randomNumber2}.png`;

// Set the random dice image to the left <img> element
document.querySelector('.img1').setAttribute('src', randomDiceImage);
document.querySelector('.img2').setAttribute('src', randomDiceImage2);

// check the winner
if(randomDiceImage > randomDiceImage2){
    document.querySelector('.result').textContent = 'Player 1 wins';
}else if(randomDiceImage < randomDiceImage2){
    document.querySelector('.result').textContent = 'Player 2 wins';
}else{
    document.querySelector('.result').textContent = 'It is a Tie!';
}