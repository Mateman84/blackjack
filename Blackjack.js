var button = document.getElementById("startBtn");
let playerOne = new Player();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];
var handWeight = 0;
var card1 = new Card();
var card2 = new Card();
var cardPres1 = document.getElementById("card1");
var cardPres2 = document.getElementById("card2");
var scoreText = document.getElementById("scoreText");
//var card3 = document.getElementById("card1");
//var card4 = document.getElementById("card1");

button.onclick = function gameStart() {
    playerOne.name = document.getElementById("nameCatcher").value;
    playerOne.bet = document.getElementById("betSize").value;
    if (playerOne.name != "") {
        console.log("Name of the player is: " + playerOne.name + " and you have: " + "0" + " cards" + " and you've bet " + playerOne.bet + ".");
        document.getElementById("playerName").innerHTML = playerOne.name;
        createDeck();
        shuffle();
        card1 = deck.pop();
        cardPres1.innerHTML = "First card is " + JSON.stringify(card1.suit) + " of " + JSON.stringify(card1.value);
        card2 = deck.pop();
        cardPres2.innerHTML = "Second card is " + JSON.stringify(card2.suit) + " of " + JSON.stringify(card2.value);
        cardScore();
    } else {
        alert("You need to enter a name!");
    }

}

function cardScore() {
    handWeight = card1.weight + card2.weight
    if (card1.weight == 11 && card2.weight == 10 || card2.weight == 11 && card1.weight == 10) {
        scoreText.innerHTML = "BLACKJACK!";
    } else {
        scoreText.innerHTML = "Your score is: " + handWeight;
    }

}


function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = new Card(value = values[i], suit = suits[x], weight = weight); //{ Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}

function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}