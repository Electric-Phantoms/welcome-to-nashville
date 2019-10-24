/* these are functions we wrote as a group to keep us from writing a lot of repeated
code */

// template for diplaying results to the DOM
const resultListItemTemplate = (inputString, resNum) => {
    return `
    <div class="resultContainer">
        <div class="divSetLength" id="resultNum${resNum}">${inputString}</div>
        <button id="saveButton${resNum}">Save</button>
    </div>
    `
}

// appends our template to the DOM
const displayResults = (inputArray) => {
    let i = 1
    inputArray.forEach(result => {
        document.querySelector("#listContainer").innerHTML += resultListItemTemplate(result, i)
        i++
    })
}

// sets save button functionality, specifically populating the selected result to the itinerary
const saveButtonFunctionality = (typeOfInput, inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        document.querySelector(`#saveButton${i + 1}`).addEventListener("click", () => {
            saveResult(typeOfInput, (i + 1));

        })
    }
}

// // populates our selected result to the DOM
// const populateItinerary = (i) => {
//     document.querySelector(`#${saveSearchID}`).innerHTML = document.querySelector(`#resultNum${i + 1}`).innerText
// }

// populates our selected result to the DOM
// const populateItinerary = (i) => {
//     const classSplit = document.querySelector(`#${saveSearchID}`).classList[1]
//     document.querySelector(`#${saveSearchID}`).innerHTML = `${classSplit}: ${document.querySelector(`#resultNum${i + 1}`).innerText}`
// }

const saveResult = (type, idFromDom) => {
    let updatedObject = {};
    let check = type;
    if (check === 1) {
        updatedObject = {
            restaurant: document.querySelector(`#resultNum${idFromDom}`).innerText
        };

    } else if (check === 2) {
        updatedObject = {
            park: document.querySelector(`#resultNum${idFromDom}`).innerText
        }

    } else if (check === 3) {
        updatedObject = {
            meetup: document.querySelector(`#resultNum${idFromDom}`).innerText
        }

    } else if (check === 4) {
        updatedObject = {
            concert: document.querySelector(`#resultNum${idFromDom}`).innerText
        }

    }

    // Logic for the PUT operation
    fetch(`http://localhost:8088/itinerary`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
        .then(res => {
            res.json();
            refreshItinerary();
        })


}

const refreshItinerary = () => {
    fetch(`http://localhost:8088/itinerary`)
        .then(jsonData => jsonData.json())
        .then(parsedData => {

            document.querySelector("#itineraryContainer").innerHTML =
                `<h2>My itinerary</h2>
        <div>
            <div class="saveResult Park" id="savePark">Park: ${parsedData.park}</div>
            <button id="clearButton1">Clear</button>
        </div>
        <div>
            <div class="saveResult Restaurant" id="saveRestaurant">Restaurant: ${parsedData.restaurant}</div>
            <button id="clearButton2">Clear</button>
        </div>
        <div>
            <div class="saveResult Meetup" id="saveMeetup">Meetup: ${parsedData.meetup}</div>
            <button id="clearButton3">Clear</button>
        </div>
        <div>
            <div class="saveResult Concert" id="saveConcert">Concert: ${parsedData.concert}</div>
            <button id="clearButton4">Clear</button>
        </div>`;
        for (i=1; i<5; i++) {
            document.querySelector(`#clearButton${i}`).addEventListener("click", (i) ={
                clearItineraryArea(i);
            })
        }
        })
}