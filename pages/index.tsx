import type { NextPage } from 'next'
import {useEffect, useState, useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Recipe from '../components/Recipe/Recipe';
import Loading from "../components/Loading/Loading";
import RecipeGrid from "../components/RecipeGrid/RecipeGrid";
import Nav from '../components/Nav/Nav'
import styles from '../styles/Home.module.css'
import { splitAndCapitalize } from '../utils/utils';


const Home: NextPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [isComplexSearchVisible, setComplexSearchVisibility] = useState(false);
  const complexSearch = useRef();
  const [formState, setFormState] = useState({
    query: 'sausage',
    cuisine: '',
    excludeCuisine: false,
    diet: '',
    intolerances: '',
    equipment: '',
    includeIngredients: '',
    excludeIngredients: '',
    type: '',
    instructionsRequired: true,
    fillIngredients: true,
    addRecipeInformation: true,
    titleMatch: '',
    maxReadyTime: '',
    ignorePantry: true,
    sort: '',
    sortDirection: '',
    minCarbs: '5',
    maxCarbs: '20',
    minProtein: '5',
    maxProtein: '30',
    minCalories: '100',
    maxCalories: '500',
    minFat: '5',
    maxFat: '20',
    minAlcohol: '',
    maxAlcohol: '',
    minCaffeine: '',
    maxCaffeine: '',
    minCopper: '',
    maxCopper: '',
    minCalcium: '',
    maxCalcium: '',
    minCholine: '',
    maxCholine: '',
    minCholesterol: '',
    maxCholesterol: '',
    minFluoride: '',
    maxFluoride: '',
    minSaturatedFat: '',
    maxSaturatedFat: '',
    minVitaminA: '',
    maxVitaminA: '',
    minVitaminC: '',
    maxVitaminC: '',
    minVitaminD: '',
    maxVitaminD: '',
    minVitaminE: '',
    maxVitaminE: '',
    minVitaminK: '',
    maxVitaminK: '',
    minVitaminB1: '',
    maxVitaminB1: '',
    minVitaminB2: '',
    maxVitaminB2: '',
    minVitaminB5: '',
    maxVitaminB5: '',
    minVitaminB3: '',
    maxVitaminB3: '',
    minVitaminB6: '',
    maxVitaminB6: '',
    minVitaminB12: '',
    maxVitaminB12: '',
    minFiber: '',
    maxFiber: '',
    minFolate: '',
    maxFolate: '',
    minFolicAcid: '',
    maxFolicAcid: '',
    minIodine: '',
    maxIodine: '',
    minIron: '',
    maxIron: '',
    minMagnesium: '',
    maxMagnesium: '',
    minManganese: '',
    maxManganese: '',
    minPhosphorus: '',
    maxPhosphorus: '',
    minPotassium: '',
    maxPotassium: '',
    minSelenium: '',
    maxSelenium: '',
    minSodium: '',
    maxSodium: '',
    minSugar: '',
    maxSugar: '',
    minZinc: '',
    maxZinc: '',
    offset: '',
    number: '',
    limitLicense: false,
    ranking: ''
})

  console.log(recipeData)

  const createUrl = (baseUrl, params) => {
    baseUrl = `${baseUrl}?`
    for (const parameter in params) {
      if (params[parameter] !== '') {
        Object.keys(params).indexOf(parameter) === 0 
        ? baseUrl = `${baseUrl}params=${parameter}=${params[parameter]}`
        : baseUrl = `${baseUrl}&${parameter}=${params[parameter]}`
      }
    }
    return baseUrl;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSearch = async () => {
    // parameters will represent the params argument. So as long as url is constructed correctly, the function should return results
    const url = createUrl(`https://uqj4m59r35.execute-api.us-east-1.amazonaws.com/prod/search`, formState);
    const response = await axios.get(url);
    setRecipeData(JSON.parse(response.data));
  }

  console.log(recipeData)

  useEffect(() => {
    handleSearch()
  }, [])

  const renderSearchCriteria = () => {
    for (const parameter in formState) {
      if (typeof formState[parameter] === "string") {
        complexSearch.current.innerHTML += `
          <div class="input-container" key=${parameter} style="margin: 10px">
            <label for=${parameter} style="font-weight: bold; margin-bottom: 10px">${splitAndCapitalize(parameter)}</label>
            <input name=${parameter} id=${parameter} style="width: 300px; height: 30px; border-radius: 5px; border: none; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" />
          </div>
          ` 
      } else {
        complexSearch.current.innerHTML += `
          <div class="input-container" key={${parameter}} style="margin: 10px">
            <label for=${parameter} style="font-weight: bold; margin-bottom: 10px">${splitAndCapitalize(parameter)}</label>
            <select id=${parameter}} style="width: 300px; height: 30px; border-radius: 5px; border: none; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        `
      }
    }
  }

  useEffect(() => {
    if (isComplexSearchVisible) {
      renderSearchCriteria()
    }
  })

  return (
    <>    
      <div>
        <Head>
          <title>Recipes</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Nav />
          <div className="advanced-search" style={{width: "100%", height: isComplexSearchVisible ? "100px" : "0px"}}>
            {isComplexSearchVisible && (
              <div className="complex-search" ref={complexSearch}>
              </div>
              )}
          </div>
          <div className="search-container" style={{top: isComplexSearchVisible ? "250px" : "100px"}}>  
            <input type="text" name="query" id="query" placeholder="Search..." onChange={handleChange} />
            <button className="search-btn" onClick={handleSearch}>Search</button>
            <button className="advanced-search-btn" onClick={() => setComplexSearchVisibility(isComplexSearchVisible => !isComplexSearchVisible)}>Advanced Search</button>
          </div>
          <div className="header-container">
            {/* <h1>Find your recipe!</h1> */}
          </div>
          {recipeData.results && (
            <div className="search">
              {recipeData.results.map(recipe => (
                <Recipe recipe={recipe} />
              ))}
            </div>
          )}
        </main>
        {isLoading && <Loading />}
      </div>
      <style jsx>{`
        main {
          position: relative;
          min-height: 100vh;
        }

        .advanced-search {
          background: #f3f3f4;
          transition: 0.25s ease-in
        }

        .complex-search {
          height: 100%;
          width: 100%;
        }

        .search-container {
          position: absolute;
          display: flex;
          width: 700px;
          height: 60px;
          left: 0;
          margin-left: auto;
          right: 0;
          margin-right: auto;
          border-radius: 12px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: 0.25s ease-in
        }

        #query {
          border: none;
          height: 100%;
          border-radius: 12px 0 0 12px ;
          width: 70%;
          padding: 10px
        }

        .search-container button {
          height: 100%;
          width: 15%;
          border: none;
          background: white;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem
        }

        .advanced-search-btn {
          border-radius: 0 12px 12px 0;
        }

        .header-container {
          width: 100%;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center
        }

        .search {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          padding-left: 25px;
          gap: 25px
        }

        .complex-search {
          display: flex;
          align-items: center;
          overflow-x: scroll;
          overflow-y: hidden;
          padding: 15px
        }

        .input-container {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin-right: 10px
        }

        .input-container select {
          width: 100%
        }
      `}</style>
    </>
  )
}

export default Home
