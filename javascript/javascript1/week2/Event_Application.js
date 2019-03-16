function getEventWeekday (eventDay) {
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var theday = new Date (); 
    console.log(theday);
    var today = theday.getDay();
    var eventWeekDay = (today + eventDay) % 7; 
    return dayNames[eventWeekDay];
}
console.log(getEventWeekday(3)); 