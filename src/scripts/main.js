populateHTML()

document.querySelector("#getParkResult").addEventListeners("click", () => {
    getParkResult(document.querySelector("#parkSearch").value)
})
document.querySelector("#getRestaurantResult").addEventListeners("click", () => {
    getRestaurantResult(document.querySelector("#restaurantSearch").value)
})
document.querySelector("#getMeetupResult").addEventListeners("click", () => {
    getMeetupResult(document.querySelector("#meetupSearch").value)    
})
document.querySelector("#getConcertResult").addEventListeners("click", () => {
    getConcertResult(document.querySelector("#concertSearch").value)
})