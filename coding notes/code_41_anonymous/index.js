/*

    anonymous objects = Object without a name
                        Not directly referenced 
                        Less syntax. No need for unique names of the objects
*/

class Card{

    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

//basically uses array

let cards = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs"),
            new Card("2", "Spades"),
            new Card("2", "Diamonds"),
            new Card("2", "Spades"),
            new Card("2", "Clubs")];


console.log(cards[1].value, cards[1].suit);


