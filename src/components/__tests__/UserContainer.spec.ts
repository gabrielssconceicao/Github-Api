import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserContainer from '../UserContainer.vue';

describe('<UserContainer />', () => {
  it('should render user container', () => {
    const wrapper = mount(UserContainer);
    expect(wrapper.findComponent(UserContainer).exists()).toBe(true);
    expect(wrapper.text()).toBe('');
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render with slots', () => {
    const wrapper = mount(UserContainer, {
      slots: {
        default: '<h2>Test</h2>',
      },
    });
    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Test');
    expect(wrapper.element).toMatchSnapshot();
  });
});
