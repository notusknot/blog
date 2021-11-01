// Vanilla JS - GET

// Define coins, shorthand first and full name 
let coins = { eth:"Ethereum", xmr:"Monero", btc:"Bitcoin" }

// Iterate through coins list, pull out shorthand and full variables
for (const [shorthand, full] of Object.entries(coins)) {

    // Create request to API for desired coin
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids='+full+'&vs_currencies=usd', true)

    // When loaded, do stuff
    xhr.onload = function () {

        // Parse the JSON response into object
        parsedResponse = JSON.parse(xhr.responseText);

        // Create <p> tag with id of the shorthand and append to <main>
        const info = document.createElement("span");
        info.setAttribute("id", shorthand);
        document.getElementById('infoContainer').appendChild(info)

        // Set the content of the <p> to the price of coin
        document.getElementById(shorthand).innerHTML = "<strong>"+full+" price:</strong> $"+parsedResponse[full.toLowerCase()].usd;
    };

    xhr.send(null);
}
