// This is the fetch call to retrieve concert data based on the text of the input field. 

const getConcertResult = concertSearchTerm => fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&keyword=${concertSearchTerm}&locale=*&city=Nashville&countryCode=US&stateCode=TN`)
    .then(concertResponse => concertResponse.json())
    .then(concertResponse => {
       /*  console.log(concertResponse) */


// Declaring the variables used to build the array of strings 
        let concertNames = ""
        let concertVenue = ""
        let concertsAll = []

// Looping through the response from the API to locate the name, venue, and date of the event, and then building an array of strings containing the information. 
    
        for (let i = 0; i < 10; i++) {
            concertNames = `${concertResponse._embedded.events[i].name}`
            concertVenue = `${concertResponse._embedded.events[i]["_embedded"]["venues"][0]["name"]}`
            concertDate = `${concertResponse._embedded.events[i].dates.start.localDate}`
            concertsAll.push(`${concertNames} at ${concertVenue} on ${concertDate}`)  
        }

 // Calling the functions to display results and add functionality to the save buttons.

        displayResults(concertsAll)
        saveButtonFunctionality(4, concertsAll)
        
        /* console.log(concertsAll) */
    })


