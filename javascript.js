// **Tile Game**

//Game mechanics
// need to be able to randomize position rather than simply clicking left to right (need to compare values of clicked item)
// 
// function to assign correct tiles
// function should only change each array element once
// function to create tiles
// need to create additional tiles each level
// function that checks if tile clicked is correct
// 
//  use set timeouts for delay between button blinks and animations 

var gameArray = [0, 1, 2, 3, 4];
var userArray =[];

var rand = Math.random();
console.log(rand);

function resetGame () {
  document.querySelector('.main').innerHTML= '';
  gameArray = [0, 1, 2, 3, 4];
  gameArray = shuffle(gameArray); //randomize array indexes
  userArray = [];
}

function startGame () {
  document.querySelector('.main').innerHTML= '';
  console.log("working"); 
  gameArray = shuffle(gameArray); //randomize array indexes
  userArray = []; 
  
  for (i = 0; i < gameArray.length; i++) {
    var btn = document.createElement("button");        // Create a <button> element
    var t = document.createTextNode(gameArray[i]);       // Create a text node
    btn.appendChild(t);     

    btn.setAttribute('data', gameArray[i]);

    //function to return data of button
    btn.onclick=function(e) {
      var data = e.target.getAttribute('data')
      data = parseInt(data);
      checkClick(data);
    } 
    // Append the text to <button>
    document.querySelector('.main').appendChild(btn);      
  }
}

//check if clicked button is correct
function checkClick (data) {
  userArray.push(data);
  if (userArray[userArray.length-1] === gameArray[userArray.length-1]) {
    console.log("correct!");
    console.log(userArray[userArray.length-1])
    //check if win condition met
    if(userArray.length === gameArray.length) {
      console.log("you win!")
      gameArray.push(gameArray.length);
      startGame();
    }
  } else {
    console.log("you lose!");
    resetGame();
    startGame();
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

arr = shuffle(gameArray);
console.log(arr);

startGame();
