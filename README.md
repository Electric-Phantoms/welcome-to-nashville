# Welcome to Nashville Application

### Electric Phantoms has created an app to assist tourists with scheduling and planning trips to Nashville. For downloading and using the app, please see the instructions below.

1. Visit (https://github.com/Electric-Phantoms/welcome-to-nashville) and clone the repository to your local machine, and navigate to the welcome-to-nashville directory. 
2. You will need to create your own file called keys.js to hold your api keys.  Create the file and you can then copy over the variables from keysExample.js and fill in the corresponding keys with your own
3. Navigate into the "src" directory and run http-server in the terminal.
4. Type in "localhost:8080" in the browser and open your developer tools. 
5. In another terminal window, navigate into the api folder and run json server with the following command: "json-server -p 8088 -w database.json"
6. At this point, the application should be running in your browser. You should see four search options with corresponding buttons. 
7. In another browser window, type in localhost:8088/itinerary and you should see the json data.
8. Type in your desired feature/food type/topic/genre and click the search button. The search results should populate below. 
9. To save a specific result to your itinerary, click the "save" button next to that result. The item will populate underneath "My Itinerary."

Note: When searching for a concert, please search by genre or venue. 



