import { shallow } from 'enzyme';
import Rules from '../Rules';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = shallow(withProvider(Rules, {})).find(Rules);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});
