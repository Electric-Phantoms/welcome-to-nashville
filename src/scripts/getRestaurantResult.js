const getRestaurantResult = (searchInput) => {
    fetchFromZomato(searchInput)
    .then(parsedData => {
        //now we are taking that big object that returned from our fetch call and picking out just the name and address for the first 10 restaurants and putting them together as strings in an array
        let dataArray = [];
        
        for (i=0; i<10; i++) {
            
            if (parsedData.restaurants[i]){
            //putting the name of each restaurant in a string
           const nameString = parsedData.restaurants[i].restaurant.name;
        //    //putting the address of each restaurant in a string
           const addressString = parsedData.restaurants[i].restaurant.location.address;
        //    //pushing an element to the array with the name and address of each restaurant
           dataArray.push(`${nameString}: ${addressString}`);
        }}
        console.log(dataArray);
        
        // putDataOnDom();
    })
}