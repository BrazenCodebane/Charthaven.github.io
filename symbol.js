//would like to house all related data to a stock in its own class object
//TODO: implement a stockSymbol class


class StockSymbol {
    constructor (name,ticker, lastClosingPrice, currentPrice) {
        
        this.name= name;
        this.ticker = ticker; // The stock ticker symbol == id
        this.lastClosingPrice = lastClosingPrice; // The last closing price of the stock
        this.currentPrice = currentPrice; // The current price of the stock
    }
    //void
     setCurrentPrice(currentPrice) {
        this.currentPrice= currentPrice;


    }

    Long(){
         document.getElementById(this.ticker).style.backgroundColor = "green"
    }

    Short(){
        document.getElementById(this.ticker).style.backgroundColor = "red"
    }

    // Method to display stock information
    //void
    displayInfo() {
        console.log('Name: ' + this.name);
        console.log(`Ticker: ${this.ticker}`);
        console.log(`Last Closing Price: $${this.lastClosingPrice.toFixed(2)}`);
        console.log(`Current Price: $${this.currentPrice.toFixed(2)}`);
    }

    // Method to calculate the price change
    //int
    priceChange() {
        return this.currentPrice - this.lastClosingPrice;
    }

    // Method to check if the stock price has increased
    //bool
    hasIncreased() {
        return this.currentPrice > this.lastClosingPrice;
    }
}