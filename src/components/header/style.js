import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    color: black;
`;
const FormComp = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const Input = styled.input`
    width: 200px;
    height: 25px;
    margin: 0.5rem;
`;
const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: #0063c7;
    color: white;
    border: none;
    margin: 0.5rem;
`;
const Select = styled.select`
    width: 150px;
    height: 30px;
    margin: 0.5rem;
`;

export { HeaderDiv, Title, FormComp, Input, Button, Select };
