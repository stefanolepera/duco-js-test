import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    text-align: center;
    color: maroon;
    padding-top: 15px;
`;

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default Title;
