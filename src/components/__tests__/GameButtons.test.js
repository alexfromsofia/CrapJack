import { shallow, mount } from 'enzyme';
import GameButtons from '../GameButtons';
import { withProvider } from '../../utils/test';

let component;

beforeEach(() => {
  component = mount(withProvider(GameButtons, {})).find(GameButtons);
});

it('Matches snapshot', () => {
  component = shallow(withProvider(GameButtons, {})).find(GameButtons);
  expect(component).toMatchSnapshot();
});

it('Should render buttons properly', () => {
  const mainBtn = component.find('.button__main');
  const rulesBtn = component.find('.button__rules');
  expect(mainBtn).toExist();
  expect(mainBtn).toHaveText('New game');

  expect(rulesBtn).toExist();
  expect(rulesBtn).toHaveText('View Rules');
});

it('Shoud change main button text', () => {
  const mainBtn = component.find('.button__main');
  mainBtn.simulate('click');

  expect(mainBtn).toHaveText('Reveal Cards');
  mainBtn.simulate('click');
  expect(mainBtn).toHaveText('New game');
});
