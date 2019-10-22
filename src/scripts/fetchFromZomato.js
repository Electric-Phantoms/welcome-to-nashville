const fetchFromZomato = (searchTerm) => {
    //this fetch call searchs and finds the right establishment ID for the type of food you searched and saves it to typeID
    return fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=${restKey}`)
    .then(jsonData => jsonData.json())
    .then(parsedData => {
        let typeID = 9999;
        for (i=0; i<parsedData.cuisines.length; i++) {
            if (parsedData.cuisines[i].cuisine.cuisine_name.toUpperCase()===searchTerm.toUpperCase()) {
                typeID = parsedData.cuisines[i].cuisine.cuisine_id;
                }
                
            }
            
            //this fetch call then uses typeID to search restaurants in Nashville for that type of food and returns a big object with the results
            if (typeID===9999) {
                document.querySelector("#listContainer").innerText = "NO RESULTS FOUND";
            }
            else {
          return  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${typeID}&start=first&sort=rating&apikey=${restKey}`)
    .then(restaurantJSONInfo => restaurantJSONInfo.json())}
    
    
        }
    )}
    
        
   
    
    
    
     
