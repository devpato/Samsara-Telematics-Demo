# Samsara Real-Time Vehicle Data Polling

This project polls the (Feed Stats Samsara API)[https://developers.samsara.com/reference/getvehiclestatsfeed] in real-time to retrieve vehicle statistics, such as GPS data, engine load percentage, and fuel percentages. The application is built using Node.js, with data fetched via the `node-fetch` package and environment variables managed by `dotenv`.

## Features
- Polls the Samsara API every 5 seconds (configurable).
- Fetches real-time data for multiple vehicle stats (e.g., GPS, engine load percentage, fuel percentages).
- Handles API response errors and retries after a delay.
- Stops polling on critical errors (e.g., authorization issues).

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Samsara API Token**: You'll need a valid Samsara API token for authentication.

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

    By default, the app fetches GPS data, engine load percentage, and fuel percentages. You can modify the `typesArray` in `feedRealTimeData.js` to fetch other types of data.

    ```javascript
    const typesArray = ['gps', 'engineLoadPercent', 'fuelPercents'];
    ```

5. **Run the application**:

    ```bash
    npm run feed
    ```

## How It Works

1. **`fetchData(url)`**: 
    - Sends a GET request to the Samsara API using the provided URL.
    - Returns a JSON object with the fetched data or an error if the request fails.

2. **`poll(url, intervalMs, fetchFn)`**: 
    - Polls the API every 5 seconds (default interval) using the `fetchData` function.
    - Continues polling unless a critical error occurs.

3. **`pullFeedRealTimeData(typesArray, intervalMs)`**:
    - Combines the desired vehicle data types (e.g., GPS, engine load) into a URL query.
    - Starts the polling process using the provided types and interval.

## Customization

- **Polling Interval**: 
  You can change the polling interval by passing a custom value when calling `pullFeedRealTimeData`.

    ```javascript
    const pollingInterval = 10000; // 10 seconds
    pullFeedRealTimeData(typesArray, pollingInterval);
    ```

- **Data Types**:
  You can add or remove vehicle data types by modifying the `typesArray`.

    ```javascript
    const typesArray = ['gps', 'fuelPercents']; // Fetch only GPS and fuel percentage data
    ```

## Error Handling

- If an HTTP error occurs (e.g., unauthorized access), the app will log the error and stop polling.
- Non-critical errors will be logged, and polling will continue.

## License

This project is licensed under the MIT License.
