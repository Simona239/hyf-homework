const numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter((number) => {
    return (number % 2 !== 0);
}).map((number) => {
    return number * 2;
});
console.log("The doubled numbers are " + newNumbers + "."); 