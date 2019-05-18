
let gifSearch = document.querySelector("#gif_search");
let button = document.querySelector("#btn");
button.addEventListener("click", function () {
let input = gifSearch.value; 
if (input === "") {
    return alert("Enter your search word!");
}

document.querySelector("#gif_box").innerHTML = ""; 
fetch('https://api.giphy.com/v1/gifs/search?q='+ input +'&api_key=bfBhnCR986PbL9f3oOjj6o7JAUCxe36c')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        for (var i = 0; i<response.data.length; i++) {
            let gif_container = document.querySelector("#gif_box");
            let h3 = document.createElement("h3");
            h3.innerHTML = response.data[i].title;
            gif_container.appendChild(h3);
            let gif_image = document.createElement("img");
            gif_image.src = response.data[i].images.original.url;
            gif_container.appendChild(gif_image);
        }
    })
}) 

