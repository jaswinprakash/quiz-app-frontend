import { Fragment, React, useEffect, useState } from "react";
import Header from "../includes/Header";
import styled from "styled-components";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { quizConfig } from "../../axiosConfig";
import { useParams } from "react-router-dom";

function MainPage() {
    const [selectedOption, setSelectedOption] = useState("");
    const [data, setData] = useState([]);
    const [pk, setpk] = useState("");

  
    const id = useParams();

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };
    const handleSubmit = () => {
        const formdata = new FormData();
        formdata.append('choice' , selectedOption,)
        quizConfig
            .post(`questions/submit-answer/${pk}/`,formdata )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        const handlefetch = () => {
            quizConfig
                .get("/questions/", {
                    params: {
                        category: id.id,
                    },
                })
                .then(function (response) {
                    setData(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        handlefetch();
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <QuestionContainer>
                    {data.map((e) => (
                        <Fragment>
                            <QuestionHeading>Questions</QuestionHeading>
                            <QuizContainer>
                                <QuizNumber>1.</QuizNumber>
                                <Questions>{e.question}</Questions>
                            </QuizContainer>
                            <OptionsContainer>
                                <form onSubmit={handleSubmit}>
                                    <RadioGroup>
                                        <RadioButton
                                            value={e.choice_1}
                                            onChange={() => {
                                                handleOptionChange(e.choice_1);
                                                setpk(e.id);
                                            }}
                                        >
                                            {e.choice_1}
                                        </RadioButton>
                                        <RadioButton
                                            value={e.choice_2}
                                            onChange={() => {
                                                handleOptionChange(e.choice_2);
                                                setpk(e.id);
                                            }}
                                        >
                                            {e.choice_2}
                                        </RadioButton>
                                        <RadioButton
                                            value={e.choice_3}
                                            onChange={() => {
                                                handleOptionChange(e.choice_3);
                                                setpk(e.id);
                                            }}
                                        >
                                            {e.choice_3}
                                        </RadioButton>
                                        <RadioButton
                                            value={e.choice_4}
                                            onChange={() => {
                                                handleOptionChange(e.choice_4);
                                                setpk(e.id);
                                            }}
                                        >
                                            {e.choice_4}
                                        </RadioButton>
                                    </RadioGroup>
                                    <p>Hint : {e.hint}</p>

                                    <SubmitBtn
                                        type="submit"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Submit
                                    </SubmitBtn>
                                </form>
                            </OptionsContainer>
                        </Fragment>
                    ))}
                </QuestionContainer>
                <TopScorer>
                    <ScoreHeading>Top Score</ScoreHeading>
                    <ScoreSubHeading>Score: 10</ScoreSubHeading>
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
    padding: 10px 70px;
    height: 190px;
`;
const ScoreHeading = styled.h1`
    font-size: 20px;
    text-align: center;
    margin-bottom: 40px;
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
const ScoreSubHeading = styled.h2``;
const SubmitBtn = styled.div`
    display: inline-block;
    background: #046bf6;
    padding: 10px 40px;
    border-radius: 5px;
    margin-top: 20px;
`;
