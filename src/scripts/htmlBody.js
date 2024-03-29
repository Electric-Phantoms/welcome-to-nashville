// initial html structure to be inserted on the DOM
const populateHTML = () => {
    const bodyReference = document.querySelector("body")
    bodyReference.innerHTML = `
    <div id="h1Banner">
        <h1>Welcome to Nashville</h1>
    </div>

    <div id="mainDiv">
        <div id="searchContainer">
            <h2>Search for stuff to do today</h2>

            <div class="textSearchButtonPair">

                <label class="labelStyling" id="searchLabelPark" for="parkSearch">Search for Parks</label>

                <select name="parkFeatures" id="parkSearch"></select>
                <button class="button searchButton" id="getParkResult">Search</button>            
            </div>

            <div class="textSearchButtonPair">

                <label class="labelStyling" id="searchLabelRestaurant" for="restaurantSearch">Search for Restaurants</label>

                <input type="text" id="restaurantSearch">
                <button class="button searchButton" id="getRestaurantResult">Search</button>            
            </div>

            <div class="textSearchButtonPair">

                <label class="labelStyling" id="searchLabelMeetup" for="meetupSearch">Search for Meetups</label>

                <input type="text" id="meetupSearch">
                <button class="button searchButton" id="getMeetupResult">Search</button>            
            </div>

            <div class="textSearchButtonPair">

                <label class="labelStyling" id="searchLabelConcert" for="concertSearch">Search for Concerts</label>

                <input type="text" id="concertSearch">
                <button class="button searchButton" id="getConcertResult">Search</button>            
            </div>
        </div>

        <div id="resultsContainer">
            <h2>Results</h2>

            <div id="listContainer">
                
            </div>
        </div>


    <div id="itineraryContainer">
        
    </div>
    `
}