const bookList = [
  { id: "the_life_of_hunger",
    author:"Amelie Nothomb", 
    title: "The Life of Hunger",
    language: "English",
    cover: "./images/img1.jpg"
  },
  { id: "flowers_for_algernon",
    author:"Daniel Keyes", 
    title:"Flowers For Algernon",
    language: "English", 
    cover: "./images/img2.jpg"  
  },  
  { id: "the_white_tiger",
    author: "Aravind Adiga",
    title:"The White Tiger",
    language: "English", 
    cover: "./images/img3.jpg"
  }, 
  { id: "the_book_thief",
    author: "Markus Zusak",
    title:"The Book Thief",
    language: "English", 
    cover: "./images/img4.jpg"  
  }, 
  { id: "tale_for_the_time_being",
    author:"Ruth Ozeki",
    title: "Tale for the Time Being",
    language: "English", 
    cover: "./images/img5.jpg"  
  },
  { id: "the_martian_chronicles",
    author:"Ray Bradbury",
    title: "The Martian Chronicles",
    language: "English", 
    cover: "./images/img6.jpg"  
  },
  { id: "asleep",
    author: "Banana Yoshimoto", 
    title: "Asleep",
    language: "English", 
    cover: "./images/img7.jpg"  
  },
  { id: "once",
    author:"Morris Gleitzman", 
    title: "Once",
    language: "English", 
    cover: "./images/img8.jpg"
  },  
  { id: "the_sun_and_her_flowers",
    author:"Rupi Kaur", 
    title:"The Sun and Her Flowers",
    language: "English", 
    cover: "./images/img9.jpg"  
  }, 
  { id: "the_castle_in_the_pyrenees",
    author: "Jostein Gaarder", 
    title: "The Castle in the Pyrenees",
    language: "English", 
    cover: "./images/img10.jpg" 
  }]; 

  
let heading = document.createElement("h1");
heading.setAttribute("id", "heading");
document.body.appendChild (heading);
heading.innerText = "My Favourite Books";

let div = document.createElement("div");
div.setAttribute("id", "div1")
document.body.appendChild(div);
    
function showBookList () {
let ul = document.createElement("ul");
ul.setAttribute("id", "list_box");
div.appendChild(ul);
  for (let i = 0; i < bookList.length; i++){
    let li = document.createElement("li");  
    ul.appendChild(li);      
    let h1 = document.createElement("h1");
    li.appendChild(h1);
    h1.innerHTML=h1.innerHTML + bookList[i].title;
    let h2 = document.createElement("h2");
    h2.innerHTML=h2.innerHTML + bookList[i].author;
    li.appendChild(h2);
    let h3 = document.createElement("h3");
    li.appendChild(h3);
    h3.innerHTML=h3.innerHTML + bookList[i].language;
    let img = document.createElement("img");
    li.appendChild(img);
    img.src=bookList[i].cover;
  }
}
showBookList(bookList); 