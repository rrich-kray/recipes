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
                    <div className={styles.steps}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>Step By Step</h1>
                        </div>
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