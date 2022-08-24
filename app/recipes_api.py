from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from recipes import search_recipes, validate_length, validate_input
from mangum import Mangum
from pydantic import BaseModel

# Problem I am trying to solve: Find a way to configure FastAPI to accept data via body and not just url.
# FastAPI is configured to accept JSON data.
# Axios, by default, will send data in JSON format.

app = FastAPI()

handler = Mangum(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def default_search():
    response = search_recipes()
    return response


@app.get("/search")  # returns bad request error (422)
async def search_api(req):
    response = search_recipes(req)
    return response

    # if validate_length(search) or validate_input(search):
    #     raise HTTPException(
    #         status_code=400, detail="Invalid use input provided")
    # else:


# start localhost server:
# uvicorn recipes_api:app --reload
