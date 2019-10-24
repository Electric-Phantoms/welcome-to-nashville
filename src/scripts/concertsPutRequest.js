
// json..Entry functions are all just error checking to avoid getting console error - non-breaking errors
const jsonParkEntry = (re) => {
    if (document.querySelector("#savePark").innerText.match(re) !== null) {
        return document.querySelector("#savePark").innerText.match(re)[1]
    } else {
        return ``
    }
 }
 const jsonRestaurantEntry = (re) => {
    if (document.querySelector("#saveRestaurant").innerText.match(re) !== null) {
        return document.querySelector("#saveRestaurant").innerText.match(re)[1]
    } else {
        return ``
    }
 }
 const jsonMeetupEntry = (re) => {
    if (document.querySelector("#saveMeetup").innerText.match(re) !== null) {
        return document.querySelector("#saveMeetup").innerText.match(re)[1]
    } else {
        return ``
    }
 }
 const jsonConcertEntry = (re) => {
    if (document.querySelector("#saveConcert").innerText.match(re) !== null) {
        return document.querySelector("#saveConcert").innerText.match(re)[1]
    } else {
        return ``
    }
 }
 // editItinerary creates object that inputs entire itinerary into JSON database
 const editItinerary = () => {
    const re = /:\s(.*)/
    const updatedObject = {
        id: 1,
        park: jsonParkEntry(re),
        restaurant: jsonRestaurantEntry(re),
        meetup: jsonMeetupEntry(re),
        concert: jsonConcertEntry(re)
    }
    // Logic for the PUT operation
    fetch(`http://localhost:8088/itinerary`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())

    return updatedObject
 }