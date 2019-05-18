fetch('https://api.openbrewerydb.org/breweries')
    .then(response => response.json())
    .then((response) => {
        console.log(response.message);
    });

    /* A pretty cool api that lists information on breweries, cideries, brewpubs, and bottleshops in the US. 
    The above stated fetch request gives the whole list of the breweries, but it is as well possible to filter data by state/name/tag or sort them by type/name. 
    Api responds with an array of objects, each of which have"tag" key, the value of which is expressed as an array of strings */