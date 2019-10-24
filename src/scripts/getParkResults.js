// API info
// https://dev.socrata.com/foundry/data.nashville.gov/74d7-b74t


// getParkResult uses results from fetchParkResults and returns results in desired format
// displays results and places on itinerary when executed

const getParkResult = parkSearchCriteria => {
    fetchParkResults(parkSearchCriteria)
        // convert to array items with appropriate formatting - only park name is of interest
        .then(myParsedParks => {
            let parksTextList = []

            for (let i = 0; i < 10; i++) {
                if (myParsedParks[i]) {
                    const newParkText = () => {
                        // regex to reach buried address string 
                        const re = `address\\": \\"(.*)\\", \\"city`
                        // return formatted html text
                        return `${myParsedParks[i]["park_name"]} at ${myParsedParks[i]["mapped_location"]["human_address"].match(re)[1]}`
                    }
                    parksTextList.push(newParkText())
                }

            }
            displayResults(parksTextList)
            saveButtonFunctionality(2, parksTextList)

        })

}

