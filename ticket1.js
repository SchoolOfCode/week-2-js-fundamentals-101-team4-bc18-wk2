//a JavaScript function `convertGBPtoEUR` that takes in a specified amount in £, 
//and converts it to € using a given exchange rate. 
//The function should return the converted amount.
function convertGBPtoEUR (GBP){
    return GBP * 1.21;
}

function convertGBPtoUSD (GBP) {
    return GBP * 1.27;
}

// Write a function convertGBPToCurrency
// which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert.
// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
// If an unknown code is entered, it should return null.


 function convertGBPToCurrency (code, GBP,) {
    if (code === "EUR"){
       return convertGBPtoEU(GBP);
    }
    else if (code === "USD"){
       return convertGBPtoUSD(GBP);
    }
    else 
        return null;
 }



 