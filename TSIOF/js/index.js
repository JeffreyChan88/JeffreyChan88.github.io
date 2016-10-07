//main//find, fight, escape//
document.getElementById("option1").innerHTML ="Find a weapon to defend yourself";
document.getElementById( "option1" ).setAttribute( "onClick", "findweapon();" );



document.getElementById("option3").innerHTML="Take the forest path";
document.getElementById( "option3" ).setAttribute( "onClick", "forestpath();" );

document.getElementById("option2" ).innerHTML="Fight the pirates";
document.getElementById("option2").setAttribute("onClick","fightpirates();");

function fightpirates() {
    document.getElementById("option2").href = "Battles/player-vs-pirate/index.html";
  }




//insout//option1//findweapon//
function findweapon() {

  document.getElementById("storyline").innerHTML ="There are to paths. The first path brings you to something like a mushroom kingdom. The other path brings you to a cave. Which path should you take?";

  document.getElementById("option1").innerHTML ="Mushroom Kingdom";
  document.getElementById("option2").innerHTML ="Cave";
  option3.style.visibility ="hidden";
 
  document.getElementById("option1").setAttribute("onClick", "mushroomkingdom();");
  document.getElementById("option2").setAttribute("onClick", "cave();");
}



function forestpath() {
  document.getElementById("storyline").innerHTML ="As you were escaping through the forest, you see two signs. One says the book of curse, and the other says talking trees. You decided to.......";
  document.getElementById("option1").innerHTML ="find the book of curse"
  document.getElementById("option1").setAttribute("onClick", "bookofcurse();");
  
  document.getElementById("option2").innerHTML ="seek help from the talking tree";
  document.getElementById("option2").setAttribute("onClick", "talkingtreereal();");
 
  option3.style.visibility ="hidden";
}

function bookofcurse() {
    document.getElementById("storyline").innerHTML ="Alright, so you really want the book of curse. To get it, you must defeat the witch, who is the owner of it! Get Ready!";
  document.getElementById("option1").innerHTML ="Get Ready!";
  option2.style.visibility ="hidden";
}

function talkingtreereal() {
    document.getElementById("storyline").innerHTML ="When you approach the talking tree, it told you that this is a dangerous island and you should not stay here. It warned you to leave this island at once, and also gave you a few shurikens for defensive usage. As you were about to turn back, you meet a Shadowman who wants a duel between you and him. ";
  document.getElementById("option1").innerHTML ="Get Ready!";
  option2.style.visibility ="hidden";
}
document.getElementById("option1").setAttribute("onClick", "hangon();");
function mushroomkingdom() {
  document.getElementById("storyline").innerHTML ="As you walk in the mushroom kingdom, you did not know that pirates were hiding behind them. They wanted to rob you even though they do not know you have nothing left. So you say- bring it on, pirates, you can steal nothing from me!";
  document.getElementById("option1").innerHTML ="Bring it on, prirates, you can steal nothing from me!"
  //link battle here
  option2.style.visibility ="hidden";
  option3.style.visibility ="hidden";
}



function cave() {
  document.getElementById("storyline").innerHTML ="As you walk in the cave for a shelter, you suddenly hear roaring sounds. You wonder where it came from so you explore further inside the cave. Now you encounter a wild bear who has the intend to hurt you. You must defend yourself!";
    document.getElementById("option1").innerHTML ="I'm pretty sure I can hang on with some defensive skills....."
    //link battle here
  option2.style.visibility ="hidden";
  option3.style.visibility ="hidden";
}