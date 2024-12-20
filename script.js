
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+stocksymbol.symbol+'&interval=1min&apikey=UQUIS0104XJ52Y6T'
const cryptoURL= 'https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol='+stocksymbol.symbol+'&interval=1min&apikey=UQUIS0104XJ52Y6T'



function httpGet(theUrl)    
{
    var xmlHttp = new XMLHttpRequest();

try{

    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}catch{
    console.log ("Error: http request failed");
    return "Error";
}
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


// Function to check price movement
async function checkPriceMovement(asset) {
    if (asset.currentPrice != null) {
        const pricechange= (asset.currentPrice - asset.lastClosingPrice);
        const pipValue = asset.lastClosingPrice * 0.0001;

           if(widgetId =='BTCUSD'){
                if( pricechange > 7 * pipValue){
                BTC.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                BTC.Short();
                //play sound
            }
                }
            if(widgetId=='ETHUSD'){
                if( pricechange > 7 * pipValue){
                ETH.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                ETH.Short();
                //play sound
            }
                }
            if(widgetId=='SPX'){
                if( pricechange > 7 * pipValue){
                SPY.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                SPY.Short();
                //play sound
            }
                }
            if(widgetId=='NDX'){
                if( pricechange > 7 * pipValue){
                NDX.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                NDX.Short();
                //play sound
            }
                }
            if(widgetId=='USOIL'){
                if( pricechange > 7 * pipValue){
                USOIL.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                USOIL.Short();
                //play sound
            }
                }
            if(widgetId=='GOLDUSD'){
                if( pricechange > 7 * pipValue){
                GOLD.Long();
                //play sound
                }else if( pricechange < -7 * pipValue){
                GOLD.Short();
                //play sound
            }
                }
                if(widgetId=='SHIB'){
                    if( pricechange > 7 * pipValue){
                    SHIB.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    SHIB.Short();
                    //play sound
                }
                    }
                if(widgetId=='XRPUSD'){
                    if( pricechange > 7 * pipValue){
                    XRP.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    XRP.Short();
                    //play sound
                }
                    }
                if(widgetId=='DOGEUSD'){SPX
                    if( pricechange > 7 * pipValue){
                    DOGE.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    DOGE.Short();
                    //play sound
                }
                    }
                if(widgetId=='ADAUSD'){
                    if( pricechange > 7 * pipValue){
                    ADA.Long();
                    //play sound
                    }else if( pricechange < -7 * pipValue){
                    ADA.Short();
                    //play sound
                }
                    }
                    if(widgetId=='SOLUSD'){
                        if( pricechange > 7 * pipValue){
                        SOL.Long();
                        //play sound
                        }else if( pricechange < -7 * pipValue){
                        SOL.Short();
                        //play sound
                    }
                        }
                    if(widgetId=='XLMUSD'){
                        if( pricechange > 7 * pipValue){
                        XLM.Long();
                        //play sound
                        }else if( pricechange < -7 * pipValue){
                        XLM.Short();
                        //play sound
                    }
                        }
                    if(widgetId=='LTCUSD'){
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
/// THIS WORKS JUST TINKER IT

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
    if (asset.isCrypto==false){
    var data=httpGet(url);
        }
    else{
    var data=httpGet(cryptoURL);
    }
var json=JSON.parse(data);
    console.log(data)

    const assets=[BTC,ETH,XRP,NDX,SPX,USOIL,SHIB,DOGE,ADA,SOL,LTC,XLM]
            var BTC ={ id:'BTCUSD' ,stocksymbol:new StockSymbol("Bitcoin", 'BTCUSD', true,fetchClosingPrices('BTCUSD'), fetchCurrentPrice('BTCUSD')) };
            var ETH ={ id:'ETHUSD' ,stocksymbol:new StockSymbol("Ethereum", 'ETHUSD',true, fetchClosingPrices('ETHUSD'), fetchCurrentPrice('ETHUSD'))};
            var XRP ={ id:'XRPUSD' ,stocksymbol:new StockSymbol("Ripple", 'XRPUSD',true, fetchClosingPrices('XRPUSD'), fetchCurrentPrice('XRPUSD'))};
            var NDX= {id:'NDX', stocksymbol:new StockSymbol("Nasdaq",'NDX',false,fetchClosingPrices('NDX'), fetchCurrentPrice('NDX'))};
            var SPX= {id:'SPX', stocksymbol:new StockSymbol("S&P", 'SPX',false, fetchClosingPrices('SPX'), fetchCurrentPrice('SPX'))};
            var USOIL= {id:'USOIL', stocksymbol:new StockSymbol("Oil", 'USOIL',false,fetchClosingPrices('USOIL'), fetchCurrentPrice('USOIL'))};
            var SHIB={id:'SHIBUSD', stocksymbol:new StockSymbol("Shiba Inu",'SHIBUSD',true,fetchClosingPrices('SHIBUSD'),fetchCurrentPrice('SHIBUSD'))};
            var DOGE={ id: 'DOGEUSD', stocksymbol:new StockSymbol ("DogeCoin",'DOGEUSD',true, fetchClosingPrices('DOGEUSD'),fetchCurrentPrice('DOGEUSD'))};
            var ADA={ id: 'ADAUSD', stocksymbol:new StockSymbol ("Cardano",'ADAUSD',true, fetchClosingPrices('ADAUSD'),fetchCurrentPrice('ADAUSD'))};
            var SOL={ id: 'SOLUSD', stocksymbol:new StockSymbol ("Solana",'SOLUSD',true, fetchClosingPrices('SOLUSD'),fetchCurrentPrice('SOLUSD'))};
            var LTC={id:'LTCUSD', stocksymbol: new StockSymbol("LiteCoin",'LTCUSD',true,fetchClosingPrices('LTCUSD'), fetchCurrentPrice('LTCUSD'))};
            var XLM={id:'XLMUSD', stocksymbol:new StockSymbol( "Stellar",'XLMUSD',true, fetchClosingPrices('XLMUSD'), fetchCurrentPrice('XLMUSD'))};
    
      // Example action: Change the background color of the element
     
        
}



    
       
        


   








main();
