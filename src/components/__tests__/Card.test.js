import { shallow } from 'enzyme';
import Card from '../Card';
import { withProvider } from '../../utils/test';

const props = { code: '1', images: { png: '' } };
let component;

beforeEach(() => {
  component = shallow(withProvider(Card, props)).find(Card);
});

it('Matches snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('To match props', () => {
  expect(component.props()).toEqual(props);
});
