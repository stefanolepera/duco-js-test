import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SubTitle from '../SubTitle';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<SubTitle />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
