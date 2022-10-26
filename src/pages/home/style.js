import styled from "styled-components";

const HomeDiv = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RecipeDiv = styled.div`
    margin-top: 2rem;
    width: 95%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;
const RecipeCard = styled.div`
    text-align: center;
    background-color: #54b2cc;
    width: 300px;
    height: 300px;
    margin: 1rem;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export { HomeDiv, RecipeDiv, RecipeCard };
