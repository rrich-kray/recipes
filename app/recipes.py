
import os
import argparse
import re
from typing import List, Any, Dict
import requests

url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
api_key = os.getenv("RECIPE_API_KEY")
headers = {
    "X-RapidAPI-Key": 'b418581ce1msh2480d13b7072a51p149da9jsne92202f6ba0d',
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
}


def main():
    print("hello world!")


def search_recipes(params):
    print(params)
    response = requests.request(
        "GET", url, headers=headers, params=params)
    return response


def validate_length(input):
    return len(input) > 20


def validate_input(input):
    return re.search("[^a-zA-Z]", input)


if __name__ == "__main__":
    main()
