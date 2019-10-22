const getMeetupResult = userInput => {
    
    // I still need to take the user input from search and change my fetch function to handle that
    
    fetchFromEventbrite()
        .then(results => {
            // console.log("event name: ", results.events[0].name.text)
            // console.log("venue name: ", results.events[0].venue.name)
            // console.log("address: ", results.events[0].venue.address.address_1)
            // console.log("object: ", results.events[0])

            // creates array of strings that are going to be populated to the DOM through another function
            // these are the search results
            const meetupInfo = []
            results.events.forEach(obj => {
                meetupInfo.push(`${obj.name.text}, ${obj.venue.name}: ${obj.venue.address.address_1}`)
            })
            // i need a return here somewhere too
            displayResults(meetupInfo)
            saveButtonFunctionality(meetupInfo)
        })
}

const resultListItemTemplate = (inputString, resNum) => {
    return `
    <div class="resultContainer">
        <div id="resultNum${resNum}">${inputString}</div>
        <button id="saveButton${resNum}">Save</button>
    </div>
    `
}

// i need to fix the name for listContainer

const displayResults = (inputArray) => {
    let i = 1
    inputArray.forEach(result => {
        document.querySelector("#listContainer").innerHTML += resultListItemTemplate(result, i)
        i++
    })
}

const saveButtonFunctionality = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        document.querySelector(`#saveButton${i + 1}`).addEventListener("click", () => {
            populateItinerary(i)
        })
    }
}

const populateItinerary = (i) => {
    document.querySelector(`#${saveSearchID}`).innerHTML = document.querySelector(`#resultNum${i + 1}`).innerText
}