import React from "react";
import { RecipeDiv, RecipeCard } from "./style";
import { Button } from "../../components/header/style";
import { useNavigate } from "react-router-dom";

const RecipeCards = ({ recipes }) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        navigate(`/details/${e.target.id}`);
    };
    return (
        <RecipeDiv>
            {recipes.map((recipe) => {
                const { uri, label, image } = recipe.recipe;
                const recipeID = uri.split("recipe_")[1];

                return (
                    <RecipeCard key={recipeID}>
                        <h3>{label}</h3>
                        <img src={image} width="150px" alt="recipe" />
                        <Button id={recipeID} onClick={handleClick}>
                            View More
                        </Button>
                    </RecipeCard>
                );
            })}
        </RecipeDiv>
    );
};

export default RecipeCards;
