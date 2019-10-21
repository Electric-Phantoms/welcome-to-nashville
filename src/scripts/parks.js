console.log("This is how you do it")

// API info
// https://dev.socrata.com/foundry/data.nashville.gov/74d7-b74t

// establish park features that will be included in a drop down menu
const parkFeatures = ["community_center", "nature_center", "playground", "ada_accessible", "restrooms_available", "picnic_shelters", "dog_park", "baseball_fields", "basketball_courts", "volleyball", "soccer_fields", "football_multi_purpose_fields", "tennis_courts", "disc_golf", "skate_park", "swimming_pool", "spray_park", "golf_course", "walk_jog_paths", "hiking_trails", "horse_trails", "mountain_bike_trails", "boat_launch", "camping_available_by_permit", "fishing_by_permit", "lake", "canoe_launch", "community_garden", "historic_features"]

const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json"

const parksTextList = []

// getParkResult accesses the API and returns those items with features sought
const getParkResult = (parkSearchCriteria) => {
    fetch(`${apiBaseUrl}?${parkSearchCriteria}=Yes`)
    // parse to json
    .then(response => response.json())
    // convert to array items with appropriate formatting - only park name is of interest
    .then(myParsedParks => {
        for(park of myParsedParks) {
            const newParkText = () => { 

                return `
            <h3 class="list-park">${park["park_name"]}</h3>
            `}
            parksTextList.push(newParkText())
        }
    })
}


// need to add drop down menu - will be done in a separate pull-down

