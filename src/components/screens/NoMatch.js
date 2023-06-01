import React from "react";
import styled from "styled-components";

function NoMatch() {
    return <NoMatchText>Page Not Found!</NoMatchText>;
}

export default NoMatch;

const NoMatchText = styled.h1`
    font-size: 50px;
    text-align: center;
`;
