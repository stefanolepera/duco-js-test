import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Spinner from '../Spinner';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<Spinner />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
