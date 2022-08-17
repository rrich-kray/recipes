import { useState } from "react";
import styles from "./styles.module.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const RecipeAccordian = ({ recipe }) => {
    const colors = ["linear-gradient(135deg, #70f570, #49c628)", "linear-gradient(135deg, #3c8ce7, #00eaff)", "linear-gradient(135deg, #ff96f9, #c32bac)", "linear-gradient(135deg, #70f570, #49c628)", "linear-gradient(135deg, #fd6e6a, #ffc600)"]
    const chooseRandomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length)
    const [isRecipeVisible, setRecipeVisibility] = useState(false)
    return (
        <div className={styles.recipe} style={{height: isRecipeVisible ? "400px" : "100px", background: isRecipeVisible ? colors[chooseRandomIndex(colors)] : "white"}}>
            <div className={styles.expand} onClick={() => setRecipeVisibility(isRecipeVisible => !isRecipeVisible)}>
                {isRecipeVisible ? <RemoveIcon /> : <AddIcon />}
            </div>
            <div className={styles.title}>{recipe.title}</div>
            <div className={styles.image} style={{backgroundImage: `url(${recipe.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", top: isRecipeVisible ? "15px" : 0, right: isRecipeVisible ? "15px" : 0}}></div>
        </div>
    )
} 

export default RecipeAccordian