import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ResultItem from '../ResultItem';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(
            <ResultItem
                characterName={''}
                characterDetails={[]}
                characterFilms={[]}
            />
        );

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
