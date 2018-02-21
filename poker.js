(function() {


    // Player logic
    function PlayersList() {
        this.first = null;
        this.last = null;
    }

    function Player(name, buyIn, next, prev) {
        this.name = name;
        this.buyIn = buyIn;
        this.currentValue = buyIn;
        this.next = next;
        this.prev = prev;
    }

    PlayersList.prototype.addPlayer = function(name, buyIn) {
        const newPlayer = new Player(name, buyIn, this.first, null)
        if (this.first) {
            this.first.prev = newPlayer;
        } else {
            this.last = newPlayer;
        }
        this.first = newPlayer;
    }

    // PlayersList.prototype.removePlayer = function(name) {
    //     let currentPlayer = this.first;
    //     while (currentPlayer) {
    //         if (name === currentPlayer.name) {
                
    //         }
    //     }
    // }

    Player.prototype.dealer = false;
    Player.prototype.bigBlind = false;
    Player.prototype.smallBlind = false;

    Player.prototype.fold = function() {}
    Player.prototype.placeBet = function(){}

    const roster = new PlayersList();
    roster.addPlayer("John", 1000);
    roster.addPlayer("Larry", 2000);
    roster.addPlayer("David", 3000);
    roster.addPlayer("Alex", 1500);
    roster.addPlayer("Jacqueline", 1250);

    // Card logic
    function Card(suit, value) {
        this.suit = suit;
        switch (value) {
            case 1:
                this.value = "Ace";
                break;
            case 11:
                this.value = "Jack";
                break;
            case 12:
                this.value = "Queen";
                break;
            case 13:
                this.value = "King";
                break;
            default:
                this.value = value + "";
                break;
        }
    }

    function Deck() {
        this.cards = [];
        for (let i = 1; i <= 52; i++) {
            if (i < 14) {
                this.cards.push(new Card("Spades", i));
            } else if (i < 27) {
                this.cards.push(new Card("Diamonds", i - 13));
            } else if (i < 40) {
                this.cards.push(new Card("Hearts", i - 26));
            } else if (i < 53) {
                this.cards.push(new Card("Clubs", i - 39));
            }
        }
    };

    Deck.prototype.drawCard = function drawCard() {
        const index = Math.floor(Math.random() * 52);
        const card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    }

    // table

    function Table(deck) {
        this.deck = deck;
        this.cardsOnTable = [];

    }

    Table.prototype.flop = function() {
        for (let i = 0; i < 3; i++) {
            this.cardsOnTable.push(this.deck.drawCard())
        }
    }

    Table.prototype.turn = function() {
        this.cardsOnTable.push(this.deck.drawCard());
    }

    Table.prototype.river = Table.prototype.turn;

    const deck = new Deck();
    const table = new Table(deck);
    table.flop();
    console.log(table.cardsOnTable);
    table.turn();
    console.log(table.cardsOnTable);
    table.river();
    console.log(table.cardsOnTable);

})();

