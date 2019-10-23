    
const fetchParkResults = parkSearchCriteria => {    
    const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json"
    return fetch(`${apiBaseUrl}?${parkSearchCriteria}=Yes`)
    // parse to json
    .then(response => response.json())
}