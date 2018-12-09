import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppContainer from '../AppContainer';

describe('<ResultItem /> test', () => {
    it('Test snapshots of content', () => {
        const wrapper = shallow(<AppContainer />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
