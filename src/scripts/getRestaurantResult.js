const getRestaurantResult = (searchInput) => {
    fetchFromZomato(searchInput)
    .then(parsedData => {
        //now we are taking that big object that returned from our fetch call and picking out just the name and address for the first 10 restaurants and putting them together as strings in an array
        let dataArray = [];
        for (i=0; i<10; i++) {
           const nameString = parsedData.restaurants[i].restaurant.name;
           const addressString = parsedData.restaurants[i].restaurant.location.address;
           dataArray.push(`${nameString}: ${addressString}`);
        }
        console.log(dataArray);
        console.log(parsedData);
        // putDataOnDom();
    })
}