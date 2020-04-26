import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
it('renders without crashing', () => {
  shallow(<App />);
});

it('Matches Snapshot', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
