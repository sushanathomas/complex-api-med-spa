# California Sun-Screen Checker

A bootcamp project designed to look up a California city's current
temperature and UV index, then display a sun-protection reminder.

## Project Status

Work in progress. The API request flow is implemented, but an API
key and several JavaScript corrections are needed for the results
to display correctly.

## Planned Features

- Search using a California city name.
- Find the city's latitude and longitude.
- Request current weather using those coordinates.
- Display temperature in Fahrenheit and the current UV index.
- Display a reminder based on the UV index.

## Built With

- HTML
- CSS
- JavaScript
- Fetch API
- Zippopotam.us API
- WeatherAPI

## How to Run

1. Download or clone this repository.
2. Replace the apiKey placeholder in JS/med-spa.js with your
   WeatherAPI key.
3. Apply the corrections listed below.
4. Open index.html in your browser.
5. Enter a California city name and click Feel the burn.

An internet connection is required. No Node.js server is needed.

## How It Works

The app first requests location data from Zippopotam.us using
the entered California city name.

It takes the first returned location's coordinates and uses them
to request current weather from WeatherAPI. The intended results
include temperature, UV index, and a sun-protection reminder.

## Project Files

- index.html — search controls and results section
- CSS/med-spa.css — page styling
- JS/med-spa.js — location and weather requests
- README.md — project documentation

## Corrections Needed

- Change InnerText to innerText.
- Change data.current.iv to data.current.uv.
- Change data.current.us to data.current.uv.
- Change #recommendatipn to #recommendation.

## Current Limitations

- Searches are limited to California cities.
- Only the first returned location is used.
- Empty input and missing locations are not explicitly handled.
- Errors are logged in the browser console.
- A weather API key placed in browser-side JavaScript is visible
  to visitors.
- The app is an educational project, not personalized medical advice.

## What I Practiced

- Connecting two API requests.
- Passing coordinates from one response into another request.
- Working with promises and JSON.
- Using conditionals to choose a message.
- Updating page content with JavaScript.

## Author

Sushana Thomas