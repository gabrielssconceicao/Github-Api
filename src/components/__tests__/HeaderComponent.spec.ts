import { expect, it, describe } from 'vitest';
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

  it('should submit the form', async () => {
    const wrapper = mount(HeaderComponentVue);

    const searchInput = wrapper.find('input[type="text"]');
    const form = wrapper.find('form');

    await searchInput.setValue('test');

    await form.trigger('submit');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const wrapper = mount(HeaderComponentVue);
    expect(wrapper.element).toMatchSnapshot();
  });
});
