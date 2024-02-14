import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NotFoundView from '../NotFoundView.vue';

describe('<NotFoundView />', () => {
  it('should render correctly', () => {
    const wrapper = mount(NotFoundView);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match snapshot', () => {
    const wrapper = mount(NotFoundView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
