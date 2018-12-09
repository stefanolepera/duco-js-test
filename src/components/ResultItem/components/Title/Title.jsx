import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    text-align: center;
    color: maroon;
    padding-top: 15px;
`;

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

Title.propTypes = {
    title: PropTypes.string
};

export default Title;
