const fetchFromZomato = (searchTerm) => {
    //this fetch call searchs and finds the right establishment ID for the type of food you searched and saves it to typeID
    return fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=${restKey}`)
    .then(jsonData => jsonData.json())
    .then(parsedData => {
        let typeID = 0;
        for (i=0; i<parsedData.cuisines.length; i++) {
            if (parsedData.cuisines[i].cuisine.cuisine_name===searchTerm) {
                typeID = parsedData.cuisines[i].cuisine.cuisine_id;
                }
                console.log(typeID)
            }
            console.log(typeID)
            //this fetch call then uses typeID to search restaurants in Nashville for that type of food and returns a big object with the results
          return  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${typeID}&start=first&sort=rating&apikey=${restKey}`)
    .then(restaurantJSONInfo => restaurantJSONInfo.json())
    
    
        }
    )}
    
        
   
    
    
    
     
