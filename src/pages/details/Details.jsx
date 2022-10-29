import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import DetailsDiv, { RecipeDiv, Nutritions, RecipeHeader, RecipeTitle, ImageDiv } from "./style";
import NotFound from "../notFound/NotFound";

const Details = () => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();
    const params = useParams();

    useEffect(() => {
        const load = () => {
            try {
                axios(
                    `https://api.edamam.com/api/recipes/v2/${params.id}?type=public&beta=false&app_id=33d03aec&app_key=75d1c46ef310fe5d6b29d8a915cc9a4f`
                ).then((res) => {
                    setLoading(false);
                    console.log(res.data.recipe);
                    setRecipe(res.data.recipe);
                });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        load();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createResult = () => {
        if (loading) {
            return <ReactLoading type={"spin"} color="#000" />;
        }
        if (Array.isArray(recipe)) {
            return <NotFound />;
        } else {
            const {
                label,
                ingredientLines,
                image,
                cautions,
                totalTime,
                cuisineType,
                mealType,
                dishType,
                totalNutrients,
            } = recipe;
            const nutritions = Object.values(totalNutrients)
                .sort((a, b) => b.quantity - a.quantity)
                .slice(0, 10);
            return (
                <>
                    <RecipeHeader>
                        <RecipeTitle>{label}</RecipeTitle>

                        {Boolean(cautions.length) && (
                            <p>
                                <strong>Cautions: </strong>
                                {String(cautions)}
                            </p>
                        )}
                        <p>
                            <strong>Total time: </strong>
                            {totalTime}
                        </p>
                        <p>
                            <strong>Type: </strong>
                            {mealType}/{dishType}
                        </p>
                        <p>
                            <strong>Cuisine: </strong>
                            {cuisineType}
                        </p>
                    </RecipeHeader>
                    <RecipeDiv>
                        <Nutritions>
                            {nutritions.map((item) => {
                                return (
                                    <p>
                                        <strong>{item.label}: </strong>
                                        {item.quantity.toFixed(2)} {item.unit}
                                    </p>
                                );
                            })}
                        </Nutritions>
                        <ImageDiv>
                            <img src={image} height={"95%"} alt="recipePic" />
                        </ImageDiv>

                        <div>
                            {ingredientLines.map((item) => (
                                <p>{item}</p>
                            ))}
                        </div>
                    </RecipeDiv>
                </>
            );
        }
    };

    return <DetailsDiv>{createResult()}</DetailsDiv>;
};

export default Details;
