const getMeetupResult = () => {
    
    // I still need to take the search user input and change my fetch function to handle that
    
    fetchFromEventbrite()
        .then(results => {
            console.log("event name: ", results.events[0].name.text)
            console.log("venue name: ", results.events[0].venue.name)
            console.log("address: ", results.events[0].venue.address.address_1)
            console.log("object: ", results.events[0])

            // creates array of strings that are going to be populated to the DOM through another function
            const meetupInfo = []
            results.events.forEach(obj => {
                meetupInfo.push(`${obj.name.text}, ${obj.venue.name}: ${obj.venue.address.address_1}`)
            })
            // i need a return here somewhere too
        })
}

getMeetupResult()