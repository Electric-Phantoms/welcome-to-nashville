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
const saveButtonFunctionality = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        document.querySelector(`#saveButton${i + 1}`).addEventListener("click", () => {
            populateItinerary(i)
            editItinerary()   
        })
    }
}

// // populates our selected result to the DOM
// const populateItinerary = (i) => {
//     document.querySelector(`#${saveSearchID}`).innerHTML = document.querySelector(`#resultNum${i + 1}`).innerText
// }

// populates our selected result to the DOM
const populateItinerary = (i) => {
    const classSplit = document.querySelector(`#${saveSearchID}`).classList[1]
    document.querySelector(`#${saveSearchID}`).innerHTML = `${classSplit}: ${document.querySelector(`#resultNum${i + 1}`).innerText}`
}