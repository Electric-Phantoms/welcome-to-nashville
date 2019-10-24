SelectFileCSS()

// this variable lets our app know which type of search is being processed
let saveSearchID = ""

// clears our results so that we only have up to 10 displaying at any time
const clearResults = () => {
    document.querySelector("#listContainer").innerHTML = ""
}

// puts our initial html structure on the DOM
populateHTML()

// puts the features on the dropdown menu of the DOM - reference parkDropdown.js
populateParkDropdown(parkFeatures)


// getParkResult on parkSearch.js

// each event listener has a specific function to go and do a fetch call from its
// specific API and post the results on the dom with a save button for the info from each specific thing
document.querySelector("#getParkResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "parkSave"
    const re = / /g
    getParkResult(document.querySelector("#parkSearch").value)
})
document.querySelector("#getRestaurantResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "restaurantSave"
    getRestaurantResult(document.querySelector("#restaurantSearch").value)
    document.querySelector("#restaurantSearch").value = ""
})
document.querySelector("#getMeetupResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "meetupSave"
    getMeetupResult(document.querySelector("#meetupSearch").value)
    document.querySelector("#meetupSearch").value = ""
})
document.querySelector("#getConcertResult").addEventListener("click", () => {
    clearResults()
    saveSearchID = "concertSave"
    getConcertResult(document.querySelector("#concertSearch").value)
    document.querySelector("#concertSearch").value = ""
})

// these event listeners add functionality to allow the enter key start the search from the input box
document.querySelector("#restaurantSearch").addEventListener("keypress", (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        clearResults()
        saveSearchID = "restaurantSave"
        getRestaurantResult(document.querySelector("#restaurantSearch").value)
        document.querySelector("#restaurantSearch").value = ""
    }
})
document.querySelector("#meetupSearch").addEventListener("keypress", (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        clearResults()
        saveSearchID = "meetupSave"
        getMeetupResult(document.querySelector("#meetupSearch").value)
        document.querySelector("#meetupSearch").value = ""
    }
})
document.querySelector("#concertSearch").addEventListener("keypress", (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        clearResults()
        saveSearchID = "concertSave"
        getConcertResult(document.querySelector("#concertSearch").value)
        document.querySelector("#concertSearch").value = ""
    }
})

refreshItinerary();
