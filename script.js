
'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=UQUIS0104XJ52Y6T'

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

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
// i may have this part wrong
// Function to refresh the current price as it fluctuates
//TODO: CHECK THIS
async function refreshCurrentPrices(assets) { for (const asset of assets) {
    const response = await request.get(url);
    asset.setCurrentPrice(response.data[response.data.length - 1].close);
}}


async function monitorAssets(assets) {

    while (true) {

        try {

            for (let asset of assets) {

                await checkPriceMovement(asset); // Ensure this function is asynchronous

            }

            // Wait for a specified interval before the next check (e.g., 5 seconds)

            await new Promise(resolve => setTimeout(resolve, 5000)); // 5000 ms = 5 seconds

        } catch (error) {

            console.error('Error checking price movement:', error);

            // Optionally, you can break the loop or continue based on the error type

        }

    }

}


// Function to check price movement
function checkPriceMovement(asset) {
    if (asset.currentPrice != null) {
        const pricechange= (asset.currentPrice - asset.lastClosingPrice);
        const pipValue = asset.lastClosingPrice * 0.0001;

           if(asset.ticker=='BTCUSD'){
                if( pricechange > 7 * pipValue){
                BTC.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                BTC.Short();
                //play sound
            }
                }
            if(asset.ticker=='ETHUSD'){
                if( pricechange > 7 * pipValue){
                ETH.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                ETH.Short();
                //play sound
            }
                }
            if(asset.ticker=='SPX'){
                if( pricechange > 7 * pipValue){
                SPY.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                SPY.Short();
                //play sound
            }
                }
            if(asset.ticker=='NDX'){
                if( pricechange > 7 * pipValue){
                NDX.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                NDX.Short();
                //play sound
            }
                }
            if(asset.ticker=='USOIL'){
                if( pricechange > 7 * pipValue){
                USOIL.Long();
                //play soundasync function monitorAssets(assets) {

    while (true) {

        try {

            for (let asset of assets) {

                await checkPriceMovement(asset); // Ensure this function is asynchronous

            }

            // Wait for a specified interval before the next check (e.g., 5 seconds)

            await new Promise(resolve => setTimeout(resolve, 5000)); // 5000 ms = 5 seconds

        } catch (error) {

            console.error('Error checking price movement:', error);

            // Optionally, you can break the loop or continue based on the error type

        }

    }

}
                }else if( pricechange < -7 * pipValue){
                USOIL.Short();
                //play sound
            }
                }
            if(asset.ticker=='GOLDUSD'){
                if( pricechange > 7 * pipValue){
                GOLD.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                GOLD.Short();
                //play sound
            }
                }
                if(asset.ticker=='SHIB'){
                    if( pricechange > 7 * pipValue){
                    SHIB.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    SHIB.Short();
                    //play sound
                }
                    }
                if(asset.ticker=='XRPUSD'){
                    if( pricechange > 7 * pipValue){
                    XRP.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    XRP.Short();
                    //play sound
                }
                    }
                if(asset.ticker=='DOGEUSD'){SPX
                    if( pricechange > 7 * pipValue){
                    DOGE.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    DOGE.Short();
                    //play sound
                }
                    }
                if(asset.ticker=='ADAUSD'){
                    if( pricechange > 7 * pipValue){
                    ADA.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    ADA.Short();
                    //play sound
                }
                    }
                    if(asset.ticker=='SOLUSD'){
                        if( pricechange > 7 * pipValue){
                        SOL.Long();
                        //play sound
                        }else if( pricechange < -7 * pipValue){
                        SOL.Short();
                        //play sound
                    }
                        }
                    if(asset.ticker=='XLMUSD'){
                        if( pricechange > 7 * pipValue){
                        XLM.Long();
                        //play sound
                        }else if( pricechange < -7 * pipValue){
                        XLM.Short();
                        //play sound
                    }
                        }
                    if(asset.ticker=='LTCUSD'){
                        if( pricechange > 7 * pipValue){
                        LTC.Long();
                        //play sound
                        }else if( pricechange < -7 * pipValue){
                        LTC.Short();
                        //play sound
                    }
                        }


        
        }
        else{
            refreshCurrentPrices(assets);
        }
    }


    function changeColor(asset) {

        document.getElementById(asset.ticker).style.backgroundColor = 'red'; // Change to any color

    }



    function changeColors(assetIds, color) {

        assetIds.forEach(assetId => {

            const element = document.getElementById(assetId);

            if (element) {

                element.style.backgroundColor = color; // Change to the specified color

            } else {

                console.warn(`Element with ID ${assetId} not found.`);

            }

        });

    }


function signalTest(element) {
    // Example action: Change the background color of the element
    element.style.backgroundColor = "green"; // Change to any color
    console.log(`Signal test triggered for element with ID: ${element.id}`);
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


//MAIN
function main() {
    var data=httpGet(url);
    var json=JSON.parse(data);
    console.log(data)


    const assets=[BTC,ETH,XRP,NDX,SPX,USOIL,SHIB,DOGE,ADA,SOL,LTC,XLM];
             BTC ={ id:'BTCUSD' ,stocksymbol:new StockSymbol("Bitcoin", 'BTCUSD', fetchClosingPrices('BTCUSD'), fetchCurrentPrice('BTCUSD')) };
             ETH ={ id:'ETHUSD' ,stocksymbol:new StockSymbol("Ethereum", 'ETHUSD', fetchClosingPrices('ETHUSD'), fetchCurrentPrice('ETHUSD'))};
             XRP ={ id:'XRPUSD' ,stocksymbol:new StockSymbol("Ripple", 'XRPUSD', fetchClosingPrices('XRPUSD'), fetchCurrentPrice('XRPUSD'))};
             NDX= {id:'NDX', stocksymbol:new StockSymbol("Nasdaq",'NDX',fetchClosingPrices('NDX'), fetchCurrentPrice('NDX'))};
             SPX= {id:'SPX', stocksymbol:new StockSymbol("S&P", 'SPX', fetchClosingPrices('SPX'), fetchCurrentPrice('SPX'))};
             USOIL= {id:'USOIL', stocksymbol:new StockSymbol("Oil", 'USOIL',fetchClosingPrices('USOIL'), fetchCurrentPrice('USOIL'))};
             SHIB={id:'SHIBUSD', stocksymbol:new StockSymbol("Shiba Inu",'SHIBUSD',fetchClosingPrices('SHIBUSD'),fetchCurrentPrice('SHIBUSD'))};
            DOGE={ id: 'DOGEUSD', stocksymbol:new StockSymbol ("DogeCoin",'DOGEUSD', fetchClosingPrices('DOGEUSD'),fetchCurrentPrice('DOGEUSD'))};
             ADA={ id: 'ADAUSD', stocksymbol:new StockSymbol ("Cardano",'ADAUSD', fetchClosingPrices('ADAUSD'),fetchCurrentPrice('ADAUSD'))};
             SOL={ id: 'SOLUSD', stocksymbol:new StockSymbol ("Solana",'SOLUSD', fetchClosingPrices('SOLUSD'),fetchCurrentPrice('SOLUSD'))};
             LTC={id:'LTCUSD', stocksymbol: new StockSymbol("LiteCoin",'LTCUSD',fetchClosingPrices('LTCUSD'), fetchCurrentPrice('LTCUSD'))};
            XLM={id:'XLMUSD', stocksymbol:new StockSymbol( "Stellar",'XLMUSD', fetchClosingPrices('XLMUSD'), fetchCurrentPrice('XLMUSD'))};
    
      // Example action: Change the background color of the element
     
      




    while(true)
        {
            for (let asset of assets) {
                
                checkPriceMovement(asset);
        
        }



    }


}





main();
