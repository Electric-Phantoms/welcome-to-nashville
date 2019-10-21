console.log("This is how you do it")

// API info
// https://dev.socrata.com/foundry/data.nashville.gov/74d7-b74t



// console.log(parkSearchEl)

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

console.log(parksTextList)

// need to add drop down menu - will be done in a separate pull-down

