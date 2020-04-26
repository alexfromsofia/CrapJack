import { shallow } from 'enzyme';
import Score from '../Score';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = shallow(withProvider(Score, {})).find(Score);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});
