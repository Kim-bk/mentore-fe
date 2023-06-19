import requests
from bs4 import BeautifulSoup
import urllib.request

def crawl_mentor_data():
    mentor_data = []

    # Send a GET request to the mentor page
    response = requests.get('https://mentori.vn/mentor')
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all mentor items on the page
    mentor_items = soup.find(
	'div', class_='mentor_list').find_all('mentor_item')

    for mentor_item in mentor_items:
        mentor = {}

        # Extract mentor details
        mentor['name'] = mentor_item.select_one('.name').text.strip()
        mentor['job_title'] = mentor_item.select_one('.jobs').text.strip()
        mentor['company'] = mentor_item.select_one('.field').text.strip()
        mentor['avatar'] = mentor_item.select_one('.mentor_avatar img')['src']

        mentor_data.append(mentor)

    return mentor_data

# Call the function to crawl mentor data
mentors = crawl_mentor_data()

# Print the mentor data
for mentor in mentors:
    print(mentor)
