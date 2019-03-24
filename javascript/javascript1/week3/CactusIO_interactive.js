const activities = [];

// adds an activity
function addActivity(date, activity, duration) {
    activities.push({date, activity, duration})
}
addActivity("23/2-19", "Youtube", 30);
addActivity("12/3-19", "Quora", 10);
addActivity("17/3-19", "Facebook", 40);
console.log(activities); 

//shows status and sets a limit of usage
function showStatus(activities) {
    let timeUsed = 0;
    let usageLimit = 120;
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    else {
        for (let i = 0; i < activities.length; i++) {
            timeUsed += activities[i].duration;
        }
        console.log("You have added" + " " + activities.length + " " + "activities. They amount to" + " " + timeUsed + " " + "min. of usage.");
        if (timeUsed > usageLimit) {
            console.log("You have reached your limit, no more smartphoning for you!");
        } else {
            console.log("You still have some time to waste on your smartphone");
        }
    }
}
showStatus(activities);