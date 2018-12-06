import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 30px auto;
`;

const Logo = () => (
    <Wrapper>
        <img
            src="https://cssanimation.rocks/demo/starwars/images/star.svg"
            alt="Star"
        />
        <img
            src="https://cssanimation.rocks/demo/starwars/images/wars.svg"
            alt="Wars"
        />
    </Wrapper>
);

export default Logo;
