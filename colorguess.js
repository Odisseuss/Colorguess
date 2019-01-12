var squareNum = 6;
var colors = [];
var goal;
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


init();

function init(){
    setupButtons();
    setupSquares();
    reset();

}

function setupButtons(){
    for(var i = 0; i<modeButtons.length; i++ ){

        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                squareNum = 3;
            } else{
                squareNum = 6;
            }

            reset();
        });
    }
}

function setupSquares(){
    for(var i =0 ; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
           var pickedColor = this.style.backgroundColor;
           if(pickedColor === goal){
               changeColors(pickedColor);
               h1.style.backgroundColor = pickedColor;
               resetButton.textContent = "Play Again?";
              messageDisplay.textContent = "Yay! You guessed it ♥"
           }else{
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Come on Bubu...."
           }
        });
   
    }
    
}



resetButton.addEventListener("click",function(){
  reset();

});



     function changeColors(color){
         for(var i=0 ; i<squares.length; i++){
             squares[i].style.backgroundColor = color;
         }
     }


function chooseGoal(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for( var i = 0; i<num; i ++){
       arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
  var r=  Math.floor(Math.random()*256);
  var g=  Math.floor(Math.random()*256);
  var b=  Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}

function reset(){
    colors=  generateRandomColors(squareNum);
   goal =  chooseGoal();
   colorDisplay.textContent = goal;
   messageDisplay.textContent = ""
   resetButton.textContent= "New Colors"
   h1.style.backgroundColor = "steelblue";
    for(var i=0; i <squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
}
