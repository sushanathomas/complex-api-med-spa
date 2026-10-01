//API Key
const apiKey = `apiKey`;


//In my HTML, find this btn, and upon the click run the 'getTemperatureInfp"
document.querySelector('#clickBtn').addEventListener('click', getTempInfo);

//Running the getTempInfo function
function getTempInfo() {

    //Read the value of the element with the city ID. 
    const city = document.querySelector('#city').value.trim();

    //First API, we're getting the city's location. 
    fetch(`https://api.zippopotam.us/us/ca/${encodeURIComponent(city)}`)

        //Conver the response into Json format for us to use. 
        .then(response => response.json())
        .then(data => {

            //Once our API response, it'll return a list of places, with [0] starting at the beginning because 0=index. And longituder & latitude describes the location. 
            const latitude = data.places[0].latitude;
            const longitude = data.places[0].longitude;

            //Second API: From the first API, we're using the coordinates to get the weather. 
            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

            //The return is returning the requests  made for the weather. 
            return fetch(url);
        })

        //Our second request of data being returned from our API and returned in JSON-format. 
        .then(response => response.json())
        .then(data => {

            //Showing the data in our browser'e console. 
            console.log(data);

            //Find the temperature and display it into our temperature-id fromt the HTML-doc
            document.querySelector('#temperature').InnerText = `Temperature: ${data.current.temp_f}°F`;
            //Find the UV and place it in and display it in our uv-idex-id from our HTML-doc. 
            document.querySelector('#uv-index').InnerText = `Current UV index: ${data.current.iv}`;

            //CONDITIONAL
            // If the UV is higher or equal to 3, run return this information. 
            if (data.current.us >= 3) {
                document.querySelector('#recommendatipn').innerText = 'Sun protection needed! Use SPF 30+ on expeosed skin, protective clothing, and shade.';
                //Else, display this infromation if it's nt higher than 3. 
            } else {
                document.querySelector('#recommendation').innerText =
                    'Low UV right now. Use SPF 30+ on exposed skin when spending time outdoors.';
            }
        })
        //If any of my previous requests fail, display this error in the browser. 
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}
