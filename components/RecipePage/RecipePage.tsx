import { style } from "@mui/system";
import { useState } from "react";
import styles from "./styles.module.scss"
import InfiniteScroll from 'react-infinite-scroller';


const RecipePage = ({ activeRecipe, setActiveRecipe }) => {
    return (
        <div className={styles.recipePage}>
            <div className={styles.leftPanel}>
                <InfiniteScroll>
                    <div className={styles.header}>
                        <div className={styles.backArrow} onClick={() => setActiveRecipe([])} >
                            <img style={{maxHeight: "100%"}} src='https://www.svgrepo.com/show/19446/back-curved-arrow.svg' />
                        </div>
                        <h1 className={styles.title}>{activeRecipe.title}</h1>
                    </div>
                    <div className={styles.summaryContainer}>
                        <p>{activeRecipe.summary.replace(/<(.*?)>/g, '')}</p>
                    </div>
                    <div className={styles.otherInfo}>
                        <div className={styles.infoTile}>
                            <h2>Prep time</h2>
                            <span>{`${activeRecipe.preparationMinutes} Minutes`}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Cooking time</h2>
                            <span>{`${activeRecipe.cookingMinutes} Minutes`}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Ready in</h2>
                            <span>{`${activeRecipe.readyInMinutes} Minutes`}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Servings</h2>
                            <span>{`${activeRecipe.servings}`}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Gluten Free?</h2>
                            <span>{activeRecipe.glutenFree ? 'Yes' : 'No'}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Vegan?</h2>
                            <span>{activeRecipe.vegan ? 'Yes' : 'No'}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Vegetarian?</h2>
                            <span>{activeRecipe.vegetarian ? 'Yes' : 'No'}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Health Score?</h2>
                            <span>{activeRecipe.healthScore}</span>
                        </div>
                        <div className={styles.infoTile}>
                            <h2>Dairy Free?</h2>
                            <span>{activeRecipe.dairyFree ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                    <div className={styles.nutritionInformation}>
                            <div className={styles.headerPanel}>
                                <h1 className={styles.title}>Nutrition Information</h1>
                            </div>
                            <div className={styles.tileContainer}>
                                {activeRecipe.nutrition.nutrients.map(nutrient => (
                                    <div className={styles.nutrientTile}>
                                        <span>{`${nutrient.name} (${nutrient.unit})`}</span>
                                        <span>{nutrient.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className={styles.steps}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>Step By Step</h1>
                        </div>
                        {activeRecipe.analyzedInstructions[0].steps.map((step, i) => (
                            <div className={styles.step}>
                                <h1>Step {i+1}</h1>
                                <p>{step.step}</p>
                                <div className={styles.ingredients}>
                                    {step.ingredients.map(ingredient => (
                                        <div className={styles.imageContainer}> 
                                            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />
                                            <span className={styles.ingredientName}>{ingredient.localizedName}</span>
                                            <div className={styles.ingredientsOverlay}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
            <div className={styles.rightPanel}
            style={{
                backgroundImage: `url(${activeRecipe.image})`,
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    )
}

export default RecipePage