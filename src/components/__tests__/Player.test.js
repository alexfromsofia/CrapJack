import { shallow } from 'enzyme';
import Player from '../Player';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = shallow(withProvider(Player, {})).find(Player);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});
