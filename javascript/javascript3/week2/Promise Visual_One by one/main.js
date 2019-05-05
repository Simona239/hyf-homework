
function translateOneByOne() {
    moveElement(document.querySelector(".marks > li:nth-child(1)"), {x: 20, y: 300})
    .then(() => {
        console.log("Red element has been moved");
        return moveElement(document.querySelector(".marks  > li:nth-child(2)"), {x: 400, y: 300});
    })
    .then(() => {
        console.log("Blue element has been moved");
        return moveElement(document.querySelector(".marks > li:nth-child(3)"), {x: 400, y: 20});
    })
    .then(() => {
        console.log("Green element has been moved");
    });
}

translateOneByOne();
