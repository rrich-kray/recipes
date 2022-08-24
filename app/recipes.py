import os
import argparse
import re
from typing import List, Any, Dict
import requests

# can have a Simple Search and Advanced Search on the frontend

url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
api_key = os.getenv("RECIPE_API_KEY")
print(api_key)
headers = {
    "X-RapidAPI-Key": 'b418581ce1msh2480d13b7072a51p149da9jsne92202f6ba0d',
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
}

# Check if it's an error importing the API Key from the environment
# Yes, error importing API key from the environment. Must fix this.


def main():
    print("hello world!")


def search_recipes(params):
    # This will accept a json object of query parameters and append them to the query_string object
    # Request will then be performed using the query_string object
    # This json object will be created on the frontend in the advanced search page.
    response = requests.request(
        "GET", url, headers=headers, params=params)
    return response.text


def validate_length(input):
    return len(input) > 20


def validate_input(input):
    return re.search("[^a-zA-Z]", input)


if __name__ == "__main__":
    main()
