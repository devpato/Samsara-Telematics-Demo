# Samsara Real-Time Vehicle Data Polling

This project polls the Samsara API in real-time to retrieve vehicle statistics, such as GPS data, engine load percentage, and fuel percentages. The application is built Python3, with data fetched via the `requests` package and environment variables managed by `python-dotenv`.

## Features
- Polls the Samsara API every 5 seconds (configurable).
- Fetches real-time data for multiple vehicle stats (e.g., GPS, engine load percentage, fuel percentages).
- Handles API response errors and retries after a delay.
- Stops polling on critical errors (e.g., authorization issues).

## Prerequisites

- **Python 3.x**
- `requests` library
- `python-dotenv` library
- **Samsara API Token**: You'll need a valid Samsara API token for authentication.

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/devpato/Samsara-Telematics-Demo
    cd python/history
    ```

2. **Install dependencies**:

    ```bash
    pip3 install requests python-dotenv
    ```

3. **Create a `.env` file** in the project root with the following content:

    ```env
    SAMSARA_TOKEN=your_samsara_api_token_here
    ```

4. **Modify the request types** (optional):

    By default, the app fetches GPS data, engine load percentage, and fuel percentages. You can modify the `types_array` in `feedRealTimeData.py` to fetch other types of data.

    ```python
    types_array = ['gps', 'engineLoadPercent', 'fuelPercents']
    ```

5. **Run the application**:

    ```bash
    python3 feedRealTimeData.py 
    ```

## How It Works

1. **`fetch_data`**: 
    - Sends a GET request to the Samsara API using the provided URL.
    - Returns a JSON object with the fetched data or an error if the request fails.

2. **`poll(url, interval_ms, fetch_fn)`**: 
    - Polls the API every 5 seconds (default interval) using the `fetch_data` function.
    - Continues polling unless a critical error occurs.

3. **`pull_feed_real_time_data(types_array, interval_ms=5000)`**:
    - Combines the desired vehicle data types (e.g., GPS, engine load) into a URL query.
    - Starts the polling process using the provided types and interval.

## Customization

- **Data Types**:
  You can add or remove vehicle data types by modifying the `types_array`.

    ```python
    types_array = ['gps', 'fuelPercents'] // Fetch only GPS and fuel percentage data
    ```

## Error Handling

- If an HTTP error occurs (e.g., unauthorized access), the app will log the error and stop polling.
- Non-critical errors will be logged, and polling will continue.

## License

This project is licensed under the MIT License.
