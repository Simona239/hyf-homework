/*console.log('Script loaded');
console.log(getAvailableProducts());*/

let products = getAvailableProducts();

//adds products 
function addProducts(product) {
    let ul = document.querySelector("ul");
    product.forEach(function (product) {
        let li = document.createElement("li");
        let name_div = document.createElement("div");
        name_div.setAttribute("class", "name");
        name_div.innerHTML = product.name;
        li.appendChild(name_div);
        ul.appendChild(li);

        let price_div = document.createElement("div");
        price_div.setAttribute("class", "price");
        price_div.innerHTML = product.price;
        li.appendChild(price_div);

        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "rating");
        rating_div.innerHTML = product.rating;
        li.appendChild(rating_div);

        let ship_div = document.createElement("div");
        ship_div.setAttribute("class", "ships-to");
        li.appendChild(ship_div);

        let ul_ship = document.createElement("ul");
        for (let i = 0; i < product.shipsTo.length; i++) {
            let li_from = document.createElement("li");
            li_from.innerHTML = product.shipsTo[i];
            ul_ship.appendChild(li_from);
        }
        ship_div.appendChild(ul_ship);
        
        let btn = document.createElement("button");
        btn.setAttribute("class", "Button");
        btn.setAttribute("id", "add_button");
        btn.onclick = () => addCart(product);
        btn.innerHTML = "Add to cart";
        li.appendChild(btn);

    })
}

//sends prices to server
function getServerMessage(message) {
    console.log(message);
}
sendPricesToServer(products.map (product => product.price), getServerMessage);

//renders the products
function renderProducts(product) {
    document.querySelector("ul").setAttribute("id", "current_product");
    document.getElementById("current_product").innerHTML = "";
    addProducts(product);
}

//filters/searches the products

let user_search = document.querySelector("input");
user_search.setAttribute("id", "input_content");
user_search.setAttribute("value", "");
user_search.setAttribute("onchange", "userSearchFunction(this.value)");
let search_value = document.getElementById("input_content").value;
console.log(search_value);

function userSearchFunction(val) {
    let search_result = products.filter(product => product.name === val);
    console.log(search_result);
    renderProducts(search_result);
}

// shows products that ship to country 
let shipping_destination = document.querySelectorAll("select");
shipping_destination[1].setAttribute("id", "select_location");
shipping_destination[1].setAttribute("value", "");
shipping_destination[1].setAttribute("onchange", "userSelectDestination(this.value)");
let select_destination = document.getElementById("select_location").value;
console.log(select_destination);

function userSelectDestination(val) {
    let selected_destination = val.charAt(0).toUpperCase() + val.slice(1);
    console.log(selected_destination);
    let destination1 = products.filter(product => product.shipsTo.includes(selected_destination));
    console.log(destination1);
    renderProducts(destination1);
}

