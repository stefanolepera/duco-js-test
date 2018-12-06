import React from 'react';
import { formatDetail } from '../../utils/FilterData';

const ResultItem = ({ characterName, characterDetails, characterFilms }) => (
    <div>
        <div>{characterName}</div>
        <hr />
        <div>
            <div>
                <div>Details</div>
                {characterDetails.map((detail, index) => (
                    <div key={index}>
                        {formatDetail(detail[0])} : {detail[1]}
                    </div>
                ))}
                <hr />
            </div>
            <div>
                <div>Films</div>
                {characterFilms.map((film, index) => (
                    <div key={index}>{film}</div>
                ))}
            </div>
        </div>
    </div>
);

export default ResultItem;
