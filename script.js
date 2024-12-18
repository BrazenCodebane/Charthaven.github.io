
'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&';


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
            const response = await request.get(`${API_URL}symbol=${asset.symbol}&interval=1m&apikey=UQUIS0104XJ52Y6T'`);
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
    if (previousPrice != null) {
        const priceDifference = Math.abs(currentPrice - previousPrice);
        const pipValue = (widgetId == 'widget1' || widgetId == 'widget3') ? 0.0001 : 0.01; // Define pip value based on asset

        if (priceDifference > 7 * pipValue) {
            console.log(`Signal: ${widgetId} price moved more than 7 pips! Current Price: ${currentPrice}, Previous Price: ${previousPrice}`);
            signal(widgetId); // Call signal function to highlight the widget
        }
    }
}



function signal(widgetId) {
 if( widgetId){
    changeBorder(widgetId);
 } 
}
function changeBorder(widgetId) {

    var element = document.getElementById(widgetId);;

    if (element) {
        element.classList.toggle('active');
        setTimeout(function() {

        element.classList.toggle('widget-container'); // Reset to original color

        }, 16000);
} }
// Function to highlight widgets at startup
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
function main() {idget6
    signalTest();


}





main();
