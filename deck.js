class Deck {
    constructor() {

        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        this.deck = new Array();


    }
    createDeck() {
        this.deck = new Array();
        for (var i = 0; i < this.values.length; i++) {
            for (var x = 0; x < this.suits.length; x++) {
                this.weight = parseInt(this.values[i]);
                if (this.values[i] == "J" || this.values[i] == "Q" || this.values[i] == "K")
                    this.weight = 10;
                if (this.values[i] == "A")
                    this.weight = 11;
                var card = { Value: this.values[i], Suit: this.suits[x], Weight: this.weight };
                this.deck.push(card);
            }

        }
        return console.log(this.deck);
    }
}

// Hearts (red), Spades (black), Clubs (green), Diamonds (yellow)