import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchBar from '../SearchBar';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<SearchBar />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
