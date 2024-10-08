import requests
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path='../../.env')

def fetch_historical_data(types_array, start_time, end_time):
    types = ','.join(types_array)
    url = f"https://api.samsara.com/fleet/vehicles/stats/history?types={types}&startTime={start_time}&endTime={end_time}"

    try:
        response = requests.get(url, headers={
            'Authorization': f"Bearer {os.getenv('SAMSARA_TOKEN')}"
        })

        if response.status_code != 200:
            raise Exception(f"HTTP error! Status: {response.status_code}")

        data = response.json()
        return {'data': data, 'continue': True}

    except Exception as error:
        print('Error fetching data:', error)
        return {'error': error, 'continue': False}

types_array = ['gps', 'engineStates']
start_time = '2024-09-05T00:00:00Z'
end_time = '2024-10-06T00:00:00Z'

result = fetch_historical_data(types_array, start_time, end_time)
print(result)
