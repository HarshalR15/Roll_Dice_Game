
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage = "d"+randomNumber1+".jpg";

var randomImageSource="imGE/" + randomDiceImage;

var Image1= document.querySelectorAll("img")[0];


Image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "d"+randomNumber2+".jpg";

var randomImageSource="imGE/" + randomDiceImage;

var Image2= document.querySelectorAll("img")[1];


Image2.setAttribute("src",randomImageSource);

if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!🥳";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!🥳";
}
else{
    document.querySelector("h1").innerHTML="Draw!🤝";
}

