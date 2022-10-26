import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import RecipeCards from "./RecipeCards";
import ReactLoading from "react-loading";
import { HomeDiv } from "./style";
const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const createRecipeCards = () => {
        if (loading) {
            return <ReactLoading type={"spin"} color="#000" />;
        }
        if (recipes.message) {
            return <p>{recipes.message}</p>;
        } else if (Boolean(recipes.length)) {
            return <RecipeCards recipes={recipes} />;
        }
    };

    return (
        <HomeDiv>
            <Header setRecipes={setRecipes} setLoading={setLoading} />
            {createRecipeCards()}
        </HomeDiv>
    );
};

export default Home;
