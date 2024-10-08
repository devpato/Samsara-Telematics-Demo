import requests
import time
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='../../.env')

def fetch_data(url):
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

def poll(url, interval_ms, fetch_fn):
    data = fetch_fn(url)
    if data.get('continue') is not False:
        time.sleep(interval_ms / 1000)
        poll(url, interval_ms, fetch_fn)

def pull_feed_real_time_data(types_array, interval_ms=5000):
    types = ','.join(types_array)
    url = f"https://api.samsara.com/fleet/vehicles/stats/feed?types={types}"
    poll(url, interval_ms, fetch_data)

types_array = ['gps', 'engineLoadPercent', 'fuelPercents']
pull_feed_real_time_data(types_array)
