# Samsara Historical Vehicle Data Fetcher

This project retrieves historical vehicle statistics from the [Historical Stats Samsara API](https://developers.samsara.com/reference/getvehiclestatshistory), such as GPS data and engine states. The application is built using Node.js, utilizing the `node-fetch` package for making API requests and `dotenv` for managing environment variables.

## Features
- Fetches historical data for specified vehicle statistics over a defined time range.
- Handles API response errors gracefully.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Samsara API Token**: A valid Samsara API token is required for authentication.

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/devpato/Samsara-Telematics-Demo
    cd node/history
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the project root with the following content:

    ```env
    SAMSARA_TOKEN=your_samsara_api_token_here
    ```
4. **Modify the request types** (optional):

    By default, the app fetches GPS data, engine load percentage, and fuel percentages. You can modify the `typesArray` in `historicalStatsData.js` to fetch other types of data.

    ```javascript
    const typesArray = ['gps', 'engineLoadPercent', 'fuelPercents'];
    ```

5. **Run the application**:

    ```bash
    npm run history
    ```

## How It Works

1. **`fetchHistoricalData(typesArray, startTime, endTime)`**:
    - Constructs a URL for the Samsara API using the provided vehicle types and time range.
    - Sends a GET request to fetch the historical data.
    - Returns a JSON object with the fetched data or an error message if the request fails.

## Customization

- **Data Types**:
  You can modify the `typesArray` to include other vehicle statistics you wish to retrieve.

    ```javascript
    const typesArray = ['gps', 'engineStates']; // Example types
    ```

- **Time Range**:
  Change the `startTime` and `endTime` variables to specify the time range for the historical data.

    ```javascript
    const startTime = '2024-09-05T00:00:00Z'; // Start date in ISO 8601 format
    const endTime = '2024-10-06T00:00:00Z';   // End date in ISO 8601 format
    ```

## Error Handling

- If an HTTP error occurs (e.g., unauthorized access), the app will log the error message to the console.
- The function returns structured data indicating whether it should continue based on the response.

## License

This project is licensed under the MIT License.
