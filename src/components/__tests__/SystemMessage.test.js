import { shallow } from 'enzyme';
import SystemMessage from '../SystemMessage';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = shallow(withProvider(SystemMessage, {})).find(SystemMessage);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});
