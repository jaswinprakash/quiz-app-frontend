import React from "react";
import Header from "../includes/Header";
import styled from "styled-components";
import {
    RadioGroup,
    RadioButton,
} from "react-radio-buttons";

function MainPage() {
    return (
        <>
            <Header />
            <MainContainer>
                <QuestionContainer>
                    <QuestionHeading>Questions</QuestionHeading>
                    <QuizContainer>
                        <QuizNumber>1.</QuizNumber>
                        <Questions>Question</Questions>
                    </QuizContainer>
                    <OptionsContainer>
                        <RadioGroup>
                            <RadioButton value="apple"></RadioButton>
                            <RadioButton value="orange"></RadioButton>
                            <RadioButton value="melon"></RadioButton>
                            <RadioButton value="melon"></RadioButton>
                        </RadioGroup>
                    </OptionsContainer>
                </QuestionContainer>
                <TopScorer>
                    <ScoreHeading>Top Scorer</ScoreHeading>
                </TopScorer>
            </MainContainer>
        </>
    );
}

export default MainPage;

const MainContainer = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;
const QuestionContainer = styled.div`
    width: 45%;
    border: 1px solid black;
    padding: 10px;
`;
const TopScorer = styled.div`
    width: 45%;
    border: 1px solid black;
    height: 100px;
`;
const ScoreHeading = styled.h1`
    font-size: 20px;
    text-align: center;
`;
const QuestionHeading = styled.h1`
    font-size: 20px;
    text-align: center;
`;
const QuizContainer = styled.div`
    display: flex;
`;
const QuizNumber = styled.h3``;
const Questions = styled.h3``;
const OptionsContainer = styled.div`
    padding: 10px 50px;
`;
