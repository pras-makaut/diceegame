var randomno1=Math.random();
randomno1*=6;
randomno1=Math.floor(randomno1);
randomno1+=1;

document.querySelector(".img1").setAttribute("src",("images/"+"dice"+randomno1+".png"));
var randomno2=Math.random();
randomno2*=6;
randomno2=Math.floor(randomno2);
randomno2+=1;
document.querySelector(".img2").setAttribute("src",("images/"+"dice"+randomno2+".png"));
if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(randomno1<randomno2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
if(randomno1===randomno2){
  document.querySelector("h1").innerHTML="Draw!";
}
