var rndnum1=Math.floor(Math.random() * 6 )+1;

 var rndnumDiceImg ="Dice"+ rndnum1 + ".png";
 var rndnumImagesrc="Images/" + rndnumDiceImg;

 var Image1= document.querySelectorAll("img")[0];

Image1.setAttribute("src", rndnumImagesrc);

var rndnum2=Math.floor(Math.random() *6)+1;
var rndnumDiceImgsrc2="Images/Dice" +rndnum2 +".png";

var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src",rndnumDiceImgsrc2);


if(rndnum1>rndnum2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 Wins";
    
}else if(rndnum1<rndnum2){
    document.querySelector("h1").innerHTML=" Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML=" Draw!";
}