const boughtCandyPrices = [];
//the function below pushes the prices into the array
function addCandy(candyType, weight){
    if (candyType==="sweet"){
        boughtCandyPrices.push(weight*0.5);
    }
    else if (candyType==="chocolate"){
        boughtCandyPrices.push(weight*0.7);
    }
    else if (candyType==="toffee"){
        boughtCandyPrices.push(weight*1.1);
    }
    else (candyType==="chewing-gum")
        boughtCandyPrices.push(weight*0.03);
}

addCandy("sweet", 60);
addCandy("chocolate", 100);
addCandy("chewing-gum", 15);

var amountToSpend = Math.random() * 100;

//the function below checks if one can buy more candy
function canBuyMoreCandy() {
    