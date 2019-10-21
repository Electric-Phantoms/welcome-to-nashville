
const fetchFromEventbrite = () => {
    return fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
        .then(r => r.json())
}

