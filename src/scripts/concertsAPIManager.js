/* This is the fetch call to retrieve concert data based on the text of the input field. */

const getConcertResult = concertSearchTerm => fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&keyword=${concertSearchTerm}&locale=*&city=Nashville&countryCode=US&stateCode=TN`)
    .then(concertResponse => concertResponse.json())
    .then(concertResponse => {
        console.log(concertResponse)
        
        
        let concertNames = []
        let concertVenue = []
        for (let i = 0; i < 10; i++) {
            concertNames = `${concertResponse._embedded.events[i].name}`
            concertVenue = `${concertResponse._embedded.events[i]["_embedded"]["venues"][0]["name"]}`
            
        }
        console.log(concertNames)
        console.log(concertVenue)
    })
    