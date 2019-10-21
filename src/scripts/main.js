populateHTML()

for (feature of parkFeatures) {
    newFeatureOption(feature)
}

document.querySelector("#getParkResult").addEventListener("click", () => {
    getParkResult(document.querySelector("#parkSearch").value.replace(" ", "_"))
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