const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
//the function bellow finds the shortest word  
function findShortestWord (){
    let shortestWord = danishWords[0]
    for (let i = 0; i < danishWords.length; i++) {
        if (shortestWord.length > danishWords[i].length) {
        shortestWord = danishWords[i]; 
        }
    }
    return shortestWord;
}
console.log(findShortestWord(danishWords));