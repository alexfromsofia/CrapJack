import { shallow } from 'enzyme';
import Game from '../Game';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = shallow(withProvider(Game, {})).find(Game);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});
