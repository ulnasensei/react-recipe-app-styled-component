import styled from "styled-components";

const LoginPage = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://picsum.photos/1600/900");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginContainer = styled.div`
    width: 400px;
    height: 400px;
    border: 2px solid #033dfc;
    border-radius: 50%;
    background-color: rgba(77, 118, 255, 0.5);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Header = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const Title = styled.h1`
    margin: 1rem auto;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    display: block;
    margin: 1rem auto;
    border: 1px solid #033dfc;
    border-radius: 10px;
    padding: 5px;
    width: 250px;
    height: 25px;
`;

const Button = styled.button`
    width: 200px;
    height: 40px;
    color: white;
    border: 2px solid #033dfc;
    border-radius: 5px;
    background-color: rgb(77, 118, 255);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export default LoginPage;
export { LoginContainer, Input, Button, Form, Title, Header };
