
'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&';



// Function to fetch the last 1-minute candle closing price and check for price movement
async function fetchClosingPrices(assets) {
    try {
        // Initialize current closing prices
        

        // Fetch closing prices for each asset
        

       refreshCurrentPrices(assets);

        // Check for price movement for each asset
        for (const asset of assets) {
          asset= checkPriceMovement(asset.id, currentClosingPrices[asset.id], previousClosingPrices[asset.id]);
            
        
        }

        
      
    } catch (error) {
        console.error('Error fetching closing prices:', error);
    }
}

async function refreshCurrentPrices(assets) { for (const asset of assets) {
    const response = await request.get(`${API_URL}symbol=${asset.symbol}&interval=1m&apikey=UQUIS0104XJ52Y6T'`);
    asset.setCurrentPrice(response.data[response.data.length - 1].close);
}}


// Function to check price movement
function checkPriceMovement(widgetId, currentPrice, previousPrice) {
    if (previousPrice != null) {
        const priceDifference = (currentPrice - previousPrice);
        const pipValue = .001;

           if(widgetId =='BTCUSD'){
                if( pricechange > 7 * pipValue){
                BTC.Long();
                }else if( pricechange < -7 * pipValue){
                BTC.Short();
            }
                }
            if(widgetId=='ETHUSD'){
                if( pricechange > 7 * pipValue){
                ETH.Long();
                }else if( pricechange < -7 * pipValue){
                ETH.hort();
            }
                }
            if(widgetId=='SPX'){
                if( pricechange > 7 * pipValue){
                SPY.Long();
                }else if( pricechange < -7 * pipValue){
                SPY.Short();
            }
                }
            if(widgetId==NDX){
                if( pricechange > 7 * pipValue){
                NDX.Long();
                }else if( pricechange < -7 * pipValue){
                NDX.Short();
            }
                }
            if(widgetId==USOIL){
                if( pricechange > 7 * pipValue){
                USOIL.Long();
                }else if( pricechange < -7 * pipValue){
                USOIL.Short();
            }
                }
            if(widgetId==GOLDUSD){
                if( pricechange > 7 * pipValue){
                GOLD.Long();
                }else if( pricechange < -7 * pipValue){
                GOLD.Short();
            }
                }
        
        
        // Call signal function to highlight the widget
        }
    }
    


function testPrices(){

}


//string

//void
function changeBorder(widgetId) {

    var element = document.getElementById(widgetId);;

    if (element) {
        element.classList.toggle('active');
        setTimeout(function() {

        element.classList.toggle('widget-container'); // Reset to original color

        }, 16000);
} }
// Function to highlight widgets at startup
//void
function signalTest() {
    for (var i = 1; i <= 6; i++) {
        // Construct the widget ID using template literals
        const widgetId = `widget${i}`; // Assuming your widget IDs are widget1, widget2, ..., widget6
        const widgetContainer = document.getElementById(widgetId); // Get the widget element by ID

        if (widgetContainer) {
            // Assuming each widget has a signal method
            widgetContainer.signal(this); // Call the signal method
        }
    }
}

// Run signalTest on page load
//MAIN
function main() {
    const assets=[BTC,ETH,XRP,NDX,SPX,USOIL,SHIB,DOGE,ADA,SOL,LTC]
             BTC ={ id:'BTCUSD' ,stocksymbol:new StockSymbol("Bitcoin", 'BTCUSD', fetchClosingPrices('BTCUSD'), fetchCurrentPrice('BTCUSD')) };
             ETH ={ id:'ETHUSD' ,stocksymbol:new StockSymbol("Ethereum", 'ETHUSD', fetchClosingPrices('ETHUSD'), fetchCurrentPrice('ETHUSD'))};
             XRP ={ id:'XRPUSD' ,stocksymbol:new StockSymbol("Ripple", 'XRP', fetchClosingPrices('XRPUSD'), fetchCurrentPrice('XRPUSD'))};
             NDX= {id:'NDX', stocksymbol:new StockSymbol("Nasdaq",'NDX',fetchClosingPrices('NDX'), fetchCurrentPrice('NDX'))};
             SPX= {id:'SPX', stocksymbol:new StockSymbol("S&P", 'SPX', fetchClosingPrices('SPX'), fetchCurrentPrice('SPX'))};
             USOIL= {id:'USOIL', stocksymbol:new StockSymbol("Oil", 'USOIL',fetchClosingPrices('USOIL'), fetchCurrentPrice('USOIL'))};
             SHIB={id:'SHIBUSD', stocksymbol:new StockSymbol("Shiba Inu",'SHIBUSD',fetchClosingPrices('SHIBUSD'),fetchCurrentPrice('SHIBUSD'))};
            DOGE={ id: 'DOGEUSD', stocksymbol:new StockSymbol ("DogeCoin",'DOGEUSD', fetchClosingPrices('DOGEUSD'),fetchCurrentPrice('DOGEUSD'))};
             ADA={ id: 'ADAUSD', stocksymbol:new StockSymbol ("Cardano",'ADAUSD', fetchClosingPrices('ADAUSD'),fetchCurrentPrice('ADAUSD'))};
             SOL={ id: 'SOLUSD', stocksymbol:new StockSymbol ("Solana",'SOLUSD', fetchClosingPrices('SOLUSD'),fetchCurrentPrice('SOLUSD'))};
             LTC={id:'LTCUSD', stocksymbol: new StockSymbol("LiteCoin",'LTCUSD',fetchClosingPrices('LTCUSD'), fetchCurrentPrice('LTCUSD'))};

            
        
    signalTest();



    




}





main();
