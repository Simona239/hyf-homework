const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

//the function below calculates and returns average 
function getAverage(arrayOfElements) {
    let sum = arrayOfElements.reduce((previous, current) => current += previous);
    let average = sum / arrayOfElements.length; 
    return average.toFixed(0);
}
console.log(getAverage(housePrices)); 

//the function below calculates and returns median 
function getMedian(arrayOfElements) {
    arrayOfElements.sort((a, b) => a - b); 
    let median = (arrayOfElements[(arrayOfElements.length - 1) >> 1] + arrayOfElements[arrayOfElements.length >> 1]) / 2
    return median.toFixed(0);
}
console.log(getMedian(housePrices));  

//the function bellow returns average and median values in an object 
function getAverageAndMedian(arrayOfElements){
    let avg = getAverage(arrayOfElements); 
    let mdn = getMedian(arrayOfElements); 
    let objAverageMedian = {avg,mdn};
    return objAverageMedian;
}
console.log (getAverageAndMedian(housePrices)); 

