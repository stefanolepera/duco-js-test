import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Logo from '../Logo';

describe('<Logo /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<Logo />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
