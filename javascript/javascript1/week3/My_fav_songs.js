const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

// Adding new songs to database 
function addSongToDatabase (song) {
      songDatabase.push (song);   
}

addSongToDatabase({songId: songDatabase.length + 1, title: 'Comfortably Numb', artist: 'Pink Floyd',});
addSongToDatabase({songId: songDatabase.length + 1, title: 'Elephant', artist: 'Laleh',});


//Searching for a song 
function getSongByTitle(title){
    for (let i = 0; i < songDatabase.length; i++) {
        if (title === songDatabase[i].title) {
           return songDatabase[i]; 
        }
    }
}
const searchedSong = getSongByTitle('Elephant');
console.log(searchedSong); // returns the song 

const searchedSong1 = getSongByTitle('Eldorado');
console.log(searchedSong1); // returns "undefined" 

//Creating own playlist 
const myPlaylist = [];
function addSongToMyPlaylist(title){
    myPlaylist.push(getSongByTitle(title))
}
addSongToMyPlaylist('Comfortably Numb');
console.log(myPlaylist); 
