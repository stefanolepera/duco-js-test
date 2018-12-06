import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
    margin: 40px auto;
    border: 5px solid #ccc;
    border-top: 5px solid maroon;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;
