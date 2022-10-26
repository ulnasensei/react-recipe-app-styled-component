import React from "react";
import { FormComp, Input, Button, Select } from "./style";
import axios from "axios";

const Form = ({ setLoading, setRecipes }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { query, meal } = e.target;
        console.log(meal.value, query.value);
        const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query.value}&app_id=33d03aec&app_key=75d1c46ef310fe5d6b29d8a915cc9a4f&mealType=${meal.value}`;
        setLoading(true);
        try {
            axios(url).then((res) => {
                setLoading(false);
                console.log(res.data.hits);
                Boolean(res.data.hits.length)
                    ? setRecipes(res.data.hits)
                    : setRecipes({ message: "No recipes." });
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            setRecipes({ message: "Error." });
        }
    };
    return (
        <FormComp onSubmit={handleSubmit}>
            <Input type="text" name="query" required />
            <Button type="submit">Search</Button>
            <Select name="meal" required>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
            </Select>
        </FormComp>
    );
};

export default Form;
