import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <>
            <HeaderContainer>
                <DivLeft>
                    <Link to="/">
                        <LogoImg
                            src={
                                require("../../assets/images/logo.png")
                            }
                        />
                    </Link>
                </DivLeft>
                <DivRight>
                    <LoginText>Login</LoginText>
                </DivRight>
            </HeaderContainer>
        </>
    );
}

export default Header;

const HeaderContainer = styled.div`
    height: 120px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`;
const DivLeft = styled.div`
    width: 120px;
`;
const LogoImg = styled.img`
    width: 100%;
    display: block;
`;
const DivRight = styled.div`
    background: #046bf6;
    padding: 10px 40px;
    border-radius: 5px;
`;
const LoginText = styled.h2`
    font-size: 20px;
    color: #fff;
`;
