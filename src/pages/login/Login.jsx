import LoginPage, { LoginContainer, Input, Button, Form, Title, Header } from "./style";
import meal2 from "../../assets/meal2.svg";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = ({ setLogin }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo");
    console.log(redirectTo);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target;
        console.log(username.value, password.value);

        if (username.value === "user" && password.value === "password") {
            setLogin(true);
            redirectTo ? navigate(redirectTo) : navigate("/");
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
