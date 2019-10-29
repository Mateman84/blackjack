let playerOne = new Player();
var button = document.getElementById("startBtn");

button.onclick = function gameStart() {
    var indexOfBetsize = document.getElementById("betSize").selectedIndex;
    var noOfChips = document.getElementById("betSize").options;
    playerOne.name = document.getElementById("nameCatcher").value;
    playerOne.bet = noOfChips[indexOfBetsize].text;
    playerOne.hand = 0;
    if (playerOne.name != "") {
        console.log("Name of the player is: " + playerOne.name + " and you have: " + playerOne.hand + " cards" + " and you've bet " + playerOne.bet + ".");
        document.getElementById("playerName").innerHTML = playerOne.name;
        createDeck();
        shuffle();
    } else {
        alert("You need to enter a name!");
    }

}

function firstCard() {
    console.log("Your first card is ")

}

/*function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
  alert("Index: " + y[x].index + " is " + y[x].text);
}*/