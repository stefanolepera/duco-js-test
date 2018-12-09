import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSubTitle = styled.div`
    font-size: 1.2em;
    font-weight: 500;
    margin: 5px 0;
    text-align: center;
    color: maroon;
`;

const SubTitle = ({ subTitle }) => <StyledSubTitle>{subTitle}</StyledSubTitle>;

SubTitle.propTypes = {
    subTitle: PropTypes.string
};

export default SubTitle;
