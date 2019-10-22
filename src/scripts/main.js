populateHTML()

// puts the features on the dropdown menu of the DOM - reference parkDropdown.js
for (feature of parkFeatures) {
    newFeatureOption(feature)
}

// getParkResult on parkSearch.js
//each event listener has a specific function to go and do a fetch call from its specific API and post the results on the dom with a save button for the info from each specific thing
document.querySelector("#getParkResult").addEventListener("click", () => {
    const re = / /g
    getParkResult(document.querySelector("#parkSearch").value.replace(re, "_"))
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

