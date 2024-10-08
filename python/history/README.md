# Samsara Historical Vehicle Data Fetcher

This project retrieves historical vehicle statistics from the Samsara API, such as GPS data and engine states. The application is built Python3, with data fetched via the `requests` package and environment variables managed by `python-dotenv`.

## Features
- Fetches historical data for specified vehicle statistics over a defined time range.
- Handles API response errors gracefully.

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
    npm install
    ```

3. **Create a `.env` file** in the project root with the following content:

    ```env
    SAMSARA_TOKEN=your_samsara_api_token_here
    ```
4. **Modify the request types** (optional):

    By default, the app fetches GPS data, engine load percentage, and fuel percentages. You can modify the `types_array` in `historicalStatsData.py` to fetch other types of data.

    ```python
    types_array = ['gps', 'engineStates']
    ```

5. **Run the application**:

    ```bash
      python3 historicalStatsData.py 
    ```

## How It Works

1. **`fetch_historical_data(types_array, start_time, end_time)`**:
    - Constructs a URL for the Samsara API using the provided vehicle types and time range.
    - Sends a GET request to fetch the historical data.
    - Returns a JSON object with the fetched data or an error message if the request fails.

## Customization

- **Data Types**:
  You can modify the `types_array` to include other vehicle statistics you wish to retrieve.

    ```python
    types_array = ['gps', 'engineStates']
    ```

- **Time Range**:
  Change the `startTime` and `endTime` variables to specify the time range for the historical data.

    ```pythonm
    start_time = '2024-09-05T00:00:00Z'
    end_time = '2024-10-06T00:00:00Z'
    ```

## Error Handling

- If an HTTP error occurs (e.g., unauthorized access), the app will log the error message to the console.
- The function returns structured data indicating whether it should continue based on the response.

## License

This project is licensed under the MIT License.
