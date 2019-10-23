let saveSearchID = ""

const clearSearch = (searchButtonID) => {
    document.querySelector(`${searchButtonID}`).reset()
}

const clearResults = () => {
    document.querySelector("#listContainer").innerHTML = ""
}

populateHTML()

// puts the features on the dropdown menu of the DOM - reference parkDropdown.js
populateParkDropdown(parkFeatures)


//each event listener has a specific function to go and do a fetch call from its specific API and post the results on the dom with a save button for the info from each specific thing

document.querySelector("#getParkResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "savePark"
    const re = / /g
    getParkResult(document.querySelector("#parkSearch").value)
})
document.querySelector("#getRestaurantResult").addEventListener("click", () => {
    clearResults()
    // document.querySelector("#listContainer").innerHTML = ""
    saveSearchID = "saveRestaurant"
    getRestaurantResult(document.querySelector("#restaurantSearch").value)
    document.querySelector("#restaurantSearch").value = ""
})
document.querySelector("#getMeetupResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "saveMeetup"
    getMeetupResult(document.querySelector("#meetupSearch").value)
    document.querySelector("#meetupSearch").value = ""
})
document.querySelector("#getConcertResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "saveConcert"
    getConcertResult(document.querySelector("#concertSearch").value)
    document.querySelector("#concertSearch").value = ""
})

