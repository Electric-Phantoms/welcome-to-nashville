/* This is the fetch call to retrieve concert data based on the text of the input field. */

 const getConcertResult = concertSearchTerm => fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&keyword=${concertSearchTerm}&locale=*&city=Nashville&countryCode=US&stateCode=TN`)
.then(concertResponse => concertResponse.json())
.then(concertResponse => {
    console.log(concertResponse)
})
