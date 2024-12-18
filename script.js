const axios = require('axios');

// Define the API endpoint and your API key (if required)
const API_URL = 'https://api.example.com/v1/candles'; // Replace with actual API URL

// Store previous closing prices
let previousClosingPrices = {
    'widget1': null,
    'widget2': null,
    'widget3': null,
    'widget4': null,
    'widget5': null,
    'widget6': null
};

// Function to fetch the last 1-minute candle closing price and check for price movement
async function fetchClosingPrices() {
    try {
        // Initialize current closing prices
        let currentClosingPrices = {};

        // Fetch closing prices for each asset
        const assets = [
            { id: 'widget1', symbol: 'BTC' },
            { id: 'widget2', symbol: 'NASDAQ' },
            { id: 'widget3', symbol: 'ETH' },
            { id: 'widget4', symbol: 'GOLD' },
            { id: 'widget5', symbol: 'SP500' },
            { id: 'widget6', symbol: 'CRUDE' }
        ];

        for (const asset of assets) {
            const response = await axios.get(`${API_URL}?symbol=${asset.symbol}&interval=1m`);
            currentClosingPrices[asset.id] = response.data[response.data.length - 1].close;
        }

        // Check for price movement for each asset
        for (const asset of assets) {
            checkPriceMovement(asset.id, currentClosingPrices[asset.id], previousClosingPrices[asset.id]);
        }

        // Update previous closing prices
        previousClosingPrices = { ...currentClosingPrices };

        // Log the closing prices
        console.log(currentClosingPrices);
    } catch (error) {
        console.error('Error fetching closing prices:', error);
    }
}

// Function to check price movement
function checkPriceMovement(widgetId, currentPrice, previousPrice) {
    if (previousPrice !== null) {
        const priceDifference = Math.abs(currentPrice - previousPrice);
        const pipValue = (widgetId === 'widget1' || widgetId === 'widget3') ? 0.0001 : 0.01; // Define pip value based on asset

        if (priceDifference > 7 * pipValue) {
            console.log(`Signal: ${widgetId} price moved more than 7 pips! Current Price: ${currentPrice}, Previous Price: ${previousPrice}`);
            signal(widgetId); // Call signal function to highlight the widget
        }
    }
}



function signal(widgetId) {
 if( widgetId === 'widget1'){
    changeBorder(widgetId);
 } 
}
function changeBorder(widgetId) {

    var element = widgetId;

    if (element) {

        element.style.borderColor = 'gold'; // Change border color to gold
        
        setTimeout(function() {

            element.style.borderColor = 'grey'; // Reset to original color

        }, 4000);
    
        element.style.borderColor = 'gold'; // Change border color to gold
        
        setTimeout(function() {

            element.style.borderColor = 'grey'; // Reset to original color

        }, 15000);
    }

}
// Function to highlight widget 135246 at startup
function signalTest() {
    const widgetContainer = null;
    for(var i=1;i<=6;i++){
     widgetContainer = document.getElementById(i);
    if (widgetContainer) {
        widgetContainer.signal();
    }}
}

// Run signalTest on page load
function main(){
    window.onload = function() {

        signalTest(); // Call signalTest on page load

    };
    getClosingPrices();
    setInterval(getClosingPrices, 10000); // Run getClosingPrices every 10 seconds


}

main();
