// **Tile Game**

//Game mechanics
// function to assign correct tiles
  //function should only change each array element once
// function to create tiles
// need to create additional tiles each level
// function that checks if tile clicked is correct
//  

var gameArray = [0, 1, 0];

var rand = Math.random();
console.log(rand);

function generator () {
  console.log("working");  
  
  for (i = 0; i < gameArray.length; i++) {
    var btn = document.createElement("button");        // Create a <button> element
    var t = document.createTextNode(gameArray[i]);       // Create a text node
    btn.appendChild(t);     

    btn.setAttribute('data', gameArray[i]);

    //function to return data of button
    btn.onclick=function(e) {
      var data = e.target.getAttribute('data')
      data = parseInt(data);
      console.log(typeof(data));

      //call check click function
      checkClick(data);
    } 
    // Append the text to <button>
    document.querySelector('.main').appendChild(btn);      
  }
}

//check if clicked button is correct
function checkClick (data) {
  if(data === 1) {
    console.log('correct');
    gameArray.push(1);
    document.querySelector('.main').innerHTML= '';
    generator();
  } else {
    console.log('wrong');
  }
}

generator();
