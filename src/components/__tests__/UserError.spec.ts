import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserError from '../UserError.vue';

describe('<UserError />', () => {
  it('should render', () => {
    const wrapper = mount(UserError);
    expect(wrapper.findComponent(UserError).exists()).toBe(true);

    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('User Not Found');

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe(
      "Sorry, we couldn't find the user you were looking for.",
    );
  });

  it('should match snapshot', () => {
    const wrapper = mount(UserError);
    expect(wrapper.element).toMatchSnapshot();
  });
});
