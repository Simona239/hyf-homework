const notes = []; 

// this function saves notes
function addNote (content, id) {
    notes.push({content, id});
}  
addNote("This note is full of facts", 1); 
addNote("This note entails secret information", 2); 
addNote("This note is useless", 3);  

//gets a note 
function getNoteFromId(id)
{
    for(let i=0; i<notes.length; i++)
    { 
        if (notes[i].id === id){
        console.log(notes[i]);
    } else if (typeof id !== "number")
    {
        console.log("Id is not valid");
    }
    }
    return;
}
getNoteFromId(1);
getNoteFromId("a"); 

//gets all notes 
function getAllNotes() {
    return notes;
}
getAllNotes();

// logs out notes 
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
      console.log("The note with id:" + notes[i].id + ", has the following note text:"  + notes[i].content + ".")     
    }
  }
  logOutNotesFormatted();