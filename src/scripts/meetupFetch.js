const fetchFromEventbrite = () => {
    return fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
        .then(r => r.json())
}

const realFetchFromEventbrite = userInput => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${userInput}&location.address=nashville&token=${meetupKey}`, {
        "headers": {
            "Accept": "application/json"
        }
        .then(r => r.json())
    });
}