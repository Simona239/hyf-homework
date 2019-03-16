//displays fullname and logs out fullname1 and fullname2
function getFullname(firstname, surname) {
    return(firstname + " " + surname);   
    }
    getFullname("Lisa", "Fox"); 
    var fullname1 = getFullname("Jane", "Dale");
    var fullname2 = getFullname("Eve", "Rogers");
    console.log(fullname1);
    console.log(fullname2); 
   
 //displays formal name if useFormalName === true  
function getFullname(firstname, surname, useFormalName) {
    
        if (useFormalName === true) {
            return("Lady " + firstname + " " + surname);
        }
        else if (useFormalName === false) {
            return(firstname + " " + surname);
        } 
        else {
            return(firstname + " " + surname);
        }
    }
    console.log (getFullname ("Lisa", "Fox", true));  
    console.log (getFullname ("Lisa", "Fox", false));  
    console.log (getFullname ("Lisa", "Fox"));  

 