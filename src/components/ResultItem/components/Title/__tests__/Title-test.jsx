import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Title from '../Title';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<Title />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
