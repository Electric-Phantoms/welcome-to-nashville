// secondary fetch code which stores our functionality
const getMeetupResult = userInput => {
    
    fetchFromEventbrite()
        .then(results => {
            
            // these are just console logs to help me keep track of what data I'm grabbing from Eventbrite
            
            // console.log("event name: ", results.events[0].name.text)
            // console.log("venue name: ", results.events[0].venue.name)
            // console.log("address: ", results.events[0].venue.address.address_1)
            // console.log("object: ", results.events[0])

            // creates array of strings that are going to be populated to the DOM through another function
            // these are the search results
            const meetupInfo = []
            results.events.forEach(obj => {
                meetupInfo.push(`${obj.name.text}, ${obj.venue.name}: ${obj.venue.address.address_1}`)
            })
            displayResults(meetupInfo)
            saveButtonFunctionality(meetupInfo)
        })
}
