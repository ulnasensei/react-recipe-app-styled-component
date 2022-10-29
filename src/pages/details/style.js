import styled from "styled-components";

const DetailsDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    flex-direction: column;
`;

const RecipeDiv = styled.div`
    width: 70%;
    background-color: #fffee0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 2rem;
`;
const Nutritions = styled.div`
    font-weight: 500;
`;
const RecipeHeader = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const RecipeTitle = styled.h1`
    width: 100%;
    text-align: center;
`;
const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default DetailsDiv;
export { RecipeDiv, Nutritions, RecipeHeader, RecipeTitle, ImageDiv };
