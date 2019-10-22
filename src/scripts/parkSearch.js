// API info
// https://dev.socrata.com/foundry/data.nashville.gov/74d7-b74t



// console.log(parkSearchEl)

const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json"

let parksTextList = []

// getParkResult accesses the API and returns those items with features sought
const getParkResult = (parkSearchCriteria) => {
    fetch(`${apiBaseUrl}?${parkSearchCriteria}=Yes`)
    // parse to json
    .then(response => response.json())
    // convert to array items with appropriate formatting - only park name is of interest
    .then(myParsedParks => {
        for(park of myParsedParks) {
            const newParkText = () => { 
                // regex to reach buried address string 
                const re = `address\\": \\"(.*)\\", \\"city`
                // return formatted html text
                return `${park["park_name"]} at ${park["mapped_location"]["human_address"].match(re)[1]}`}
            parksTextList.push(newParkText())
        }
    // only a test - should be removed 
    parksTextList.length = 10;
    console.log(parksTextList)

    })
    // set array list to empty so there's no accumulation from previous search
    parksTextList = []
}

