// API info
// https://dev.socrata.com/foundry/data.nashville.gov/74d7-b74t



// console.log(parkSearchEl)





// getParkResult accesses the API and returns those items with features sought
const getParkResult = (parkSearchCriteria) => {
    const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json"
    fetch(`${apiBaseUrl}?${parkSearchCriteria}=Yes`)
    // parse to json
    .then(response => response.json())
    // convert to array items with appropriate formatting - only park name is of interest
    .then(myParsedParks => {
        let parksTextList = []
    
        for(let i = 0; i < 10; i++) {
            if (myParsedParks[i]) {
                const newParkText = () => { 
                    // regex to reach buried address string 
                    const re = `address\\": \\"(.*)\\", \\"city`
                    // return formatted html text
                    return `${myParsedParks[i]["park_name"]} at ${myParsedParks[i]["mapped_location"]["human_address"].match(re)[1]}`}
                parksTextList.push(newParkText())
            }

        }
        displayResults(parksTextList)
        saveButtonFunctionality(parksTextList)

    })
    // set array list to empty so there's no accumulation from previous search

}

