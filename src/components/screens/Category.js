import React, { useContext, useState } from "react";
import Header from "../includes/Header";
import styled from "styled-components";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/store";

function Category() {
    const [techStatus, setTechStatus] = useState("");

console.log(techStatus,"techStatus");
  
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate(`/home/${techStatus}`);
    };
    return (
        <>
            <Header />
            <MainContainer>
                <CategoryContainer>
                    <OptionsContainer>
                        <form onSubmit={handleSubmit}>
                            <RadioGroup>
                                <RadioButton
                                    value="option1"
                                    onChange={() => setTechStatus("Technology")}
                                >
                                    Technology
                                </RadioButton>
                                <RadioButton
                                    value="option2"
                                    onChange={() => setTechStatus("General Knowledge")}
                                >
                                    General Knowledge
                                </RadioButton>
                            </RadioGroup>
                            <SubmitBtn
                                type="submit"
                                onClick={() => {techStatus && handleSubmit()}}
                            >
                                Submit
                            </SubmitBtn>
                        </form>
                    </OptionsContainer>
                </CategoryContainer>
            </MainContainer>
        </>
    );
}
export default Category;

const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const CategoryContainer = styled.div`
    width: 40%;
    margin: 0 auto;
`;
const OptionsContainer = styled.div``;
const SubmitBtn = styled.div`
    display: inline-block;
    background: #046bf6;
    padding: 10px 40px;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
`;
