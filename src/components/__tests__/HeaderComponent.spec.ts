import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderComponentVue from '../HeaderComponent.vue';

describe('<HeaderComponent />', () => {
  it('should render header', () => {
    const wrapper = mount(HeaderComponentVue);
    expect(wrapper.findComponent('header').exists()).toBe(true);

    expect(wrapper.find('h1').text()).toBe('GitHub Finder');
    expect(wrapper.find('img[aria-label="GitHub Logo"]').exists()).toBe(true);
    expect(wrapper.find('input[name="search"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('should send search event', async () => {
    const wrapper = mount(HeaderComponentVue);

    const searchInput = wrapper.find('input[name="search"]');
    await searchInput.setValue('resolveTest');

    const form = wrapper.find('form');
    await form.trigger('submit');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const wrapper = mount(HeaderComponentVue);
    expect(wrapper.element).toMatchSnapshot();
  });
});
