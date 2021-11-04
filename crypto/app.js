// Define coins, shorthand first and full name 
const coins = { nano:"Nano", eth:"Ethereum", xmr:"Monero", btc:"Bitcoin" }

// Iterate through coins list, pull out shorthand and full variables
for (const [shorthand, full] of Object.entries(coins)) {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids='+full+'&vs_currencies=usd';
    const parsedResponse = await fetch(url).then(r => r.json())

    // Create div and add info to it
    const info = document.createElement("div");
    info.innerHTML = "<strong>"+full+" price:</strong> $"+parsedResponse[full.toLowerCase()].usd;

    // Add div to <main>
    document.getElementById('infoContainer').append(info)

}
