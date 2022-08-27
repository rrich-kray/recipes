from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from recipes import search_recipes, validate_length, validate_input
from mangum import Mangum
from pydantic import BaseModel

# FastAPI will read the body of the request as json. Axios should send the body as JSON
# Same as a python dict.

# Problem is likely that req body is not properly formatted
# JSON object is properly formatted.
# Try eliminating blank paramters


class Recipe(BaseModel):
    query: str
    cuisine: str
    excludeCuisine: str
    diet: str
    intolerances: str
    equipment: str
    includeIngredients: str
    excludeIngredients: str
    type: str
    instructionsRequired: str
    fillIngredients: str
    addRecipeInformation: str
    titleMatch: str
    maxReadyTime: str
    ignorePantry: str
    sort: str
    sortDirection: str
    minCarbs: str
    maxCarbs: str
    minProtein: str
    maxProtein: str
    minCalories: str
    maxCalories: str
    minFat: str
    maxFat: str
    minAlcohol: str
    maxAlcohol: str
    minCaffeine: str
    maxCaffeine: str
    minCopper: str
    maxCopper: str
    minCalcium: str
    maxCalcium: str
    minCholine: str
    maxCholine: str
    minCholesterol: str
    maxCholesterol: str
    minFluoride: str
    maxFluoride: str
    minSaturatedFat: str
    maxSaturatedFat: str
    minVitaminA: str
    maxVitaminA: str
    minVitaminC: str
    maxVitaminC: str
    minVitaminD: str
    maxVitaminD: str
    minVitaminE: str
    maxVitaminE: str
    minVitaminK: str
    maxVitaminK: str
    minVitaminB1: str
    maxVitaminB1: str
    minVitaminB2: str
    maxVitaminB2: str
    minVitaminB5: str
    maxVitaminB5: str
    minVitaminB3: str
    maxVitaminB3: str
    minVitaminB6: str
    maxVitaminB6: str
    minVitaminB12: str
    maxVitaminB12: str
    minFiber: str
    maxFiber: str
    minFolate: str
    maxFolate: str
    minFolicAcid: str
    maxFolicAcid: str
    minIodine: str
    maxIodine: str
    minIron: str
    maxIron: str
    minMagnesium: str
    maxMagnesium: str
    minManganese: str
    maxManganese: str
    minPhosphorus: str
    maxPhosphorus: str
    minPotassium: str
    maxPotassium: str
    minSelenium: str
    maxSelenium: str
    minSodium: str
    maxSodium: str
    minSugar: str
    maxSugar: str
    minZinc: str
    maxZinc: str
    offset: str
    number: str
    limitLicense: str
    ranking: str


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

# With pydantic, error is "unhashable type: dict"
# With Request, error is "cannot mix str and non-str arguments"
# Based on the


@app.post("/search")
async def search_api(req: Recipe):
    req_dict = req.dict()
    filteredParams = {}
    for key, value in req_dict.items():
        if value != '':
            filteredParams[key] = value
    response = search_recipes(filteredParams)
    return response.text


# start localhost server:
# uvicorn recipes_api:app --reload
