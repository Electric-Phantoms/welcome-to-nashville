const populateHTML = () => {
    const bodyReference = document.querySelector("body")
    bodyReference.innerHTML = `
    <h1>Welcome to Nashville</h1>

    <div id="searchContainer">
        <h2>Search for stuff to do today</h2>

        <div class="textSearchButtonPair">
            <input type="text" id="parkSearch">
            <button class="button searchButton" id="getParkResult">Search</button>            
        </div>

        <div class="textSearchButtonPair">
            <input type="text" id="restaurantSearch">
            <button class="button searchButton" id="getRestaurantResult">Search</button>            
        </div>

        <div class="textSearchButtonPair">
            <input type="text" id="meetupSearch">
            <button class="button searchButton" id="getMeetupResult">Search</button>            
        </div>

        <div class="textSearchButtonPair">
            <input type="text" id="concertSearch">
            <button class="button searchButton" id="getConcertResult">Search</button>            
        </div>
    </div>

    <div id="resultsContainer">
        <h2>Results</h2>

        <div id="listContainer">
            <ol id="searchResults"></ol>
        </div>
    </div>

    <div id="itineraryContainer">
        <h2>My itinerary</h2>

        <div class="saveResult" id="savePark">Park: </div>
        <div class="saveResult" id="saveRestaurant">Restaurant: </div>
        <div class="saveResult" id="saveMeetup">Meetup: </div>
        <div class="saveResult" id="saveConcert">Concert: </div>
    </div>
    `
}