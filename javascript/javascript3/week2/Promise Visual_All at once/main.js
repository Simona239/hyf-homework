function translateAllAtOnce() {
    let promise_1 = moveElement(document.querySelector(".marks > li:nth-child(1)"), {x: 20, y: 300})
    let promise_2 = moveElement(document.querySelector(".marks  > li:nth-child(2)"), {x: 400, y: 300});
    let promise_3 = moveElement(document.querySelector(".marks > li:nth-child(3)"), {x: 400, y: 20});
    
    Promise.all([promise_1, promise_2, promise_3]).then(() => {
        console.log("All elements have been moved");
    });
}
translateAllAtOnce(); 

