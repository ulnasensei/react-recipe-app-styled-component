import LoginPage, { LoginContainer, Input, Button, Form, Title, Header } from "./style";
import meal2 from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target;
        console.log(username.value, password.value);

        if (username.value === "user" && password.value === "password") {
            setLogin(true);
            navigate("/");
        } else {
            alert("Invalid username or password.");
        }
    };
    return (
        <LoginPage>
            <LoginContainer>
                <Header>
                    <img src={meal2} width="100px" alt="login-form-icon" />
                    <Title>RECIPE</Title>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Input type={"text"} placeholder="user" name="username" alt="user" />
                    <Input
                        type={"password"}
                        placeholder="password"
                        name="password"
                        alt="password"
                    />
                    <Button type="submit">Login</Button>
                </Form>
            </LoginContainer>
        </LoginPage>
    );
};

export default Login;
