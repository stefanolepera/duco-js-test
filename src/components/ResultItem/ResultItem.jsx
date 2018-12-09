import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './components/Title/Title';
import SubTitle from './components/SubTitle/SubTitle';
import { formatDetail } from '../../utils/FilterData';

const MainWrapper = styled.div`
    margin: 0 auto;
    width: 620px;
    min-width: 400px;
    background: #ccc;
    border-radius: 4px;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 20px;
`;

const ResultItem = ({ characterName, characterDetails, characterFilms }) => (
    <MainWrapper>
        <Title title={characterName} />
        <hr />
        <ContentWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Details" />
                {characterDetails.map((detail, index) => (
                    <div key={index}>
                        {formatDetail(detail[0])} : {detail[1]}
                    </div>
                ))}
                <hr />
            </DetailsWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Films" />
                {characterFilms.map((film, index) => (
                    <div key={index}>{film}</div>
                ))}
            </DetailsWrapper>
        </ContentWrapper>
    </MainWrapper>
);

ResultItem.propTypes = {
    characterName: PropTypes.string,
    characterDetails: PropTypes.arrayOf(PropTypes.array),
    characterFilms: PropTypes.arrayOf(PropTypes.string)
};

export default ResultItem;
