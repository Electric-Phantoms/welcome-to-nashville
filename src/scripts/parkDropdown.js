// establish park features that will be included in a drop down menu
const parkFeatures = ["community_center", "nature_center", "playground", "ada_accessible", "restrooms_available", "picnic_shelters", "dog_park", "baseball_fields", "basketball_courts", "volleyball", "soccer_fields", "football_multi_purpose_fields", "tennis_courts", "disc_golf", "skate_park", "swimming_pool", "spray_park", "golf_course", "walk_jog_paths", "hiking_trails", "horse_trails", "mountain_bike_trails", "boat_launch", "camping_available_by_permit", "fishing_by_permit", "lake", "canoe_launch", "community_garden", "historic_features"]

// formats dropdown menu items to remove underscore for appearance; added back in for search
const newFeatureOption = (feature) => {
    const re = /_/g
    const newOption = document.createElement("option")
    newOption.className = "parkFeature"
    newOption.innerHTML = feature.replace(re,' ')
    newOption.id = `feature-${feature}`
    document.querySelector("#parkSearch").appendChild(newOption)
}

// function to populate dropdown menu called on main.js
const populateParkDropdown = parkfeatures => {
    for (feature of parkFeatures) {
    newFeatureOption(feature)
    }
}

