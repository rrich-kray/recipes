import { useState } from 'react';
import { NextPage } from 'next'

const Recipe: NextPage = ({recipe}) => {
    return (
        <>
            <div className="recipe" >
                <div className="image-container" style={{backgroundImage: `url(${recipe.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                <div className="info-container">
                    <h2 style={{textAlign: "center"}}>{recipe.title}</h2>
                </div>
            </div>
            <style jsx>{`
                .recipe {
                    height: 500px;
                    width: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: 0.1s linear;
                    border-radius: 12px;
                    cursor: pointer
                }

                .image-container {
                    width: 100%;
                    height: 70%;
                    border-radius: 12px;
                }

                .info-container {
                    width: 100%;
                    height: 30%;
                    padding: 10px
                }

                .recipe:hover {
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    transform: scale(1.025);
                }
            `}</style>
        </>
    )
}

export default Recipe