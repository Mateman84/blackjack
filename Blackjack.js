var button = document.getElementById("startBtn");
let playerOne = new Player();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];
var handWeight = 0;
var card1 = new Card();
var card2 = new Card();
var dCard1 = new Card();
var dCard2 = new Card();
var cardPres1 = document.getElementById("card1");
var cardPres2 = document.getElementById("card2");
var dCardPres1 = document.getElementById("dCard1");
var dCardPres2 = document.getElementById("dCard2");
var scoreText = document.getElementById("scoreText");


button.onclick = function gameStart() {
    playerOne.name = document.getElementById("nameCatcher").value;
    playerOne.bet = document.getElementById("betSize").value;
    if (playerOne.name != "") {
        document.getElementById("playerName").innerHTML = playerOne.name;
        createDeck();
        shuffle();
        dealHands();
        cardScore();
        //console.log("Name of the player is: " + playerOne.name + " and you have: " + card1.suit + " cards" + " and you've bet " + playerOne.bet + ".");
    } else {
        alert("You need to enter a name!");
    }

}

function cardScore() {
    handWeight = card1.weight + card2.weight;
    dHandWeight = dCard1.weight + dCard2.weight;
    console.log(handWeight);
    console.log(dHandWeight);
    //if (card1.weight == 11 && card2.weight == 10 || card2.weight == 11 && card1.weight == 10) {
    if (handWeight == 21 && dHandWeight == 21) {
        scoreText.innerHTML = "Both " + playerOne.name + " and Dealer got BLACKJACK!";
    } else if (handWeight == 21 && dHandWeight < 21) {
        scoreText.innerHTML = playerOne.name + " got BLACKJACK!" + handWeight;
    } else if (dHandWeight == 21 && handWeight < 21) {
        scoreText.innerHTML = "Dealer got BLACKJACK!" + handWeight;
    } else if (dHandWeight < 21 && dHandWeight > handWeight) {
        scoreText.innerHTML = "Dealer has the best hand with: " + dHandWeight + " VS " + playerOne.name + " : " + handWeight;
    } else if (handWeight < 21 && handWeight > dHandWeight) {
        scoreText.innerHTML = playerOne.name + " has the best hand with: " + handWeight + " VS Dealers: " + dHandWeight;
    } else {
        scoreText.innerHTML = "It's a push!";
    }
}

function dealHands() {
    card1 = deck.pop();
    cardPres1.innerHTML = "First card is " + JSON.stringify(card1.value) + " of " + JSON.stringify(card1.suit);
    dCard1 = deck.pop();
    dCardPres1.innerHTML = "Dealer First card is " + JSON.stringify(dCard1.value) + " of " + JSON.stringify(dCard1.suit);
    card2 = deck.pop();
    cardPres2.innerHTML = "Second card is " + JSON.stringify(card2.value) + " of " + JSON.stringify(card2.suit);
    dCard2 = deck.pop();
    dCardPres2.innerHTML = "Dealer Second card is " + JSON.stringify(dCard2.value) + " of " + JSON.stringify(dCard2.suit);
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
            var card = new Card(suit = suits[x], value = values[i], weight = weight); //{ Value: values[i], Suit: suits[x], Weight: weight };
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