
function checkWeather (weatherTemp) {
    if (weatherTemp <= 0) {
        return ("wrap yourself into several layers of clothing, preferably with a jacket on top");
    } else if (weatherTemp < 12) {
        return ("something warm, but not too warm, and keep a jacket on");
    } else if (weatherTemp < 20) {
        return ("drop the jacket, but carry a sweater with you");
    } else {
        return ("dress light and bright");
    }
}
const clothesToWear = checkWeather(20);
console.log(clothesToWear); 









