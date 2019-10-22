populateHTML()
//each event listener has a specific function to go and do a fetch call from its specific API and post the results on the dom with a save button for the info from each specific thing
document.querySelector("#getParkResult").addEventListener("click", () => {
    getParkResult(document.querySelector("#parkSearch").value)
})
document.querySelector("#getRestaurantResult").addEventListener("click", () => {
    getRestaurantResult(document.querySelector("#restaurantSearch").value)
})
document.querySelector("#getMeetupResult").addEventListener("click", () => {
    getMeetupResult(document.querySelector("#meetupSearch").value)    
})
document.querySelector("#getConcertResult").addEventListener("click", () => {
    getConcertResult(document.querySelector("#concertSearch").value)
})