import React from "react";
import Form from "./Form";
import { HeaderDiv, Title } from "./style";

const Header = ({ setLoading, setRecipes }) => {
    return (
        <HeaderDiv>
            <Title>Food App</Title>
            <Form setRecipes={setRecipes} setLoading={setLoading} />
        </HeaderDiv>
    );
};

export default Header;
