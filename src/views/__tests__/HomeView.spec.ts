import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../HomeView.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import UserContainer from '@/components/UserContainer.vue';

describe('<HomeView />', () => {
  it('should render correctly', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true);
    expect(wrapper.findComponent(UserContainer).exists()).toBe(true);
  });
  it('should match snapshot', () => {
    const wrapper = mount(HomeView);

    expect(wrapper.element).toMatchSnapshot();
  });
});
