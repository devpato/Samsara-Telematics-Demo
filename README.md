# Samsara Developer

This project is organized into two main directories: `node` and `python`. Each directory contains two subdirectories: `feed` and `history`. These subdirectories represent different functionalities related to real-time data feeds and historical statistics, respectively, for the [Samsara Telematics API](https://developers.samsara.com/docs/telematics). Both the Node.js and Python implementations are provided, making the project versatile for users familiar with either language.

Learn more about the [Feed Stats](https://developers.samsara.com/reference/getvehiclestatsfeed) and [History Stats](https://developers.samsara.com/reference/getvehiclestatshistory) APIs from Samsara Telematics.

## Folder Structure

```bash
.
├── node
│   ├── feed
│   │   ├── feedRealTimeData.js
│   │   └── README.md
│   ├── history
│   │   ├── historicalStatsData.js
│   │   └── README.md
│   ├── package-lock.json
│   └── package.json
├── python
│   ├── feed
│   │   ├── feedRealTimeData.py
│   │   └── README.md
│   ├── history
│   │   ├── historicalStatsData.py
│   │   └── README.md
├── .env
└── .gitignore
```

### Node.js Directory

The `node` directory contains implementations using JavaScript (Node.js). It includes:

- `feedRealTimeData.js`: Handles fetching and processing real-time data in Node.js.
- `historicalStatsData.js`: Manages historical statistics data in Node.js.
- `package.json` and `package-lock.json`: These files manage the project's dependencies and configurations for Node.js.

Each subdirectory in the `node` folder has its own `README.md` file for more detailed explanations specific to that module.

### Python Directory

The `python` directory provides equivalent implementations using Python. It includes:

- `feedRealTimeData.py`: A Python script for processing real-time data from the feed API.
- `historicalStatsData.py`: A Python script for handling historical statistics data from the history API.

Each subdirectory in the `python` folder also has its own `README.md` file to explain the specifics of the respective modules.

### Other Files

- `.env`: Environment configuration file used to store sensitive information like API keys and database credentials.
- `.gitignore`: Specifies which files and directories Git should ignore to keep the repository clean, such as the `node_modules` folder and environment files.

## Installation and Setup

### Node.js Setup

1. Navigate to the `node` directory:
   ```bash
   cd node
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the real-time data feed script:
   ```bash
   npm run feed
   ```

4. Run the historical stats data script:
   ```bash
   npm run history
   ```

### Python Setup

1. Navigate to the `python` directory:
   ```bash
   cd python
   ```

2. Install dependencies 
   ```bash
   pip3 install requests python-dotenv
   ```

3. Run the real-time data feed script:
   ```bash
   python3 feed/feedRealTimeData.py
   ```

4. Run the historical stats data script:
   ```bash
   python3 history/historicalStatsData.py
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.