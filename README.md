<h1 align="center">Simple Random Quote Generator</h1>


<p align="center">
  <strong>A simple React application that generates random quotes.</strong>
</p>

## Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_random_qoute_generator_json.git`
2. Change directory to the project folder: `cd simple_random_qoute_generator_json`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

The application consists of a single component called `App`. It manages the state for the randomly generated quote and contains the `generateRandomQuote` function, which selects a random quote from the `quotes` array.

To generate a new random quote, simply click the "Generate Quote" button.

## Components

The main component of the application is `App`, which renders the quote generator functionality.

### App

The `App` component is responsible for generating and displaying random quotes. It contains the following functionality:

- The `quote` state variable stores the currently displayed quote.
- The `generateRandomQuote` function selects a random quote from the `quotes` array and updates the `quote` state with the selected quote.
- When the "Generate Quote" button is clicked, the `generateRandomQuote` function is called, and the randomly generated quote is displayed on the screen.

##  Data

The application uses a JSON file named `quotes.json` to store the list of available quotes. Each quote object in the array contains the following properties:

- `text`: The text content of the quote.
- `author`: The author of the quote.

You can modify the `quotes.json` file to add or remove quotes as desired.

## Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.