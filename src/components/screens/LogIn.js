import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { Context } from "../context/store";
import { quizConfig } from "../../axiosConfig";

export default function LogIn() {
    const { state, dispatch } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    // const { updateUserData } = useContext(UserContext);
    console.log(state,"rrr");
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        quizConfig
        .post(`/auth/token/`, {
            username: username,
            password : password
        })
        .then((response) => {
           
            let data = response.data;
            console.log(data.access,"555");
            // localStorage.setItem("user_data", JSON.stringify(data));
            // updateUserData({ type: "LOGIN", payload: data });
            const user_details = {
                is_verified: true,
                access_token: data.access,
            };
            dispatch({
                type: "UPDATE_USER_DETAILS",
                user_details,
            });
            navigate("/category");
        })
        .catch((error) => {
            console.log(error.response.data);
            if (error.response.status === 401) {
            setMessage(error.response.data.detail);
            } else {
            if (error.response.data.username === "username") {
                setMessage("email:field is required");
            } else {
                setMessage("email & password field is required");
            }
            }
        });
    };
    return (
        <Container>
            <LeftContainer>
                <HeaderContainer>
                    <Link to={"/home"}>
                        <Logo
                            src={require("../../assets/images/logo.png")}
                            alt="Image"
                        />
                    </Link>
                </HeaderContainer>
                <MainHeading>Please Log In or Sign Up to Begin</MainHeading>
            </LeftContainer>
            <RightContainer>
                <LoginContainer>
                    <LoginHeading>Login to your Account</LoginHeading>
                    <LoginInfo>Enter email and password to login</LoginInfo>
                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <TextInput
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="email"
                            placeholder="Email"
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextInput
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            />
                        </InputContainer>
                        <LoginButton to="/signup">Signup Now</LoginButton>
                        {message && <ErrorMessage>{message}</ErrorMessage>}
                        <ButtonContainer>
                            <SubmitButton>Login</SubmitButton>
                        </ButtonContainer>
                    </Form>
                </LoginContainer>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 15px;
`;
const LeftContainer = styled.div`
    width: 55%;
    padding: 40px 70px 70px;
`;
const HeaderContainer = styled.div`
    width: 140px;
`;
const Logo = styled.img`
    width: 100%;
`;
const MainHeading = styled.h1`
    font-size: 80px;
    color: #090e5e;
    margin-top: 200px;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    background: #efefef;
    width: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 20px;
    padding: 0 70px 70px;
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #046bf6;
    font-size: 20px;
`;
const SubmitButton = styled.button`
    background: #046bf6;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;
