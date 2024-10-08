import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const fetchData = async (url) => {
  console.log(process.env.SAMSARA_TOKEN)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.SAMSARA_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {data, continue: true};

  } catch (error) {
    console.error('Error fetching data:', error);
    return {error, continue: false};
  }
};

const poll = async (url,intervalMs, fetchFn) => {
  const data = await fetchFn(url);
  if (data.continue !== false) {
    setTimeout(() => poll(url, intervalMs, fetchFn), intervalMs);
  }
};

const pullFeedRealTimeData = (typesArray, intervalMs = 5000) => {
  const types = typesArray.join(',');
  const url = `https://api.samsara.com/fleet/vehicles/stats/feed?types=${types}`;
  poll(url, intervalMs, fetchData);
};

const typesArray = ['gps', 'engineLoadPercent', 'fuelPercents'];
pullFeedRealTimeData(typesArray);
