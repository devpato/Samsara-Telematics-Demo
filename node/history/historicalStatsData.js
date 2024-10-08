import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const fetchHistoricalData = async (typesArray, startTime, endTime) => {
  const types = typesArray.join(',');
  const url = `https://api.samsara.com/fleet/vehicles/stats/history?types=${types}&startTime=${startTime}&endTime=${endTime}`;
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

const typesArray = ['gps','engineStates'];
const startTime =  '2024-09-05T00:00:00Z';
const endTime = '2024-10-06T00:00:00Z';
fetchHistoricalData(typesArray, startTime, endTime);
