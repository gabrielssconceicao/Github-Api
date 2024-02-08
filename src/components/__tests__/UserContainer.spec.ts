import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import UserContainer from '../UserContainer.vue';
import UserComponent from '../UserComponent.vue';
import UserError from '../UserError.vue';
import Loading from '../LoadingComponent.vue';

import { useUserStore } from '@/stores/user';

describe('<UserContainer />', () => {
  it('should render user container', () => {
    const wrapper = mount(UserContainer);
    expect(wrapper.find('section').exists()).toBe(true);

    expect(wrapper.findComponent(UserComponent).exists()).toBe(false);
    expect(wrapper.findComponent(UserError).exists()).toBe(false);
    expect(wrapper.findComponent(Loading).exists()).toBe(false);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should show loadComponent when there is a search', async () => {
    const wrapper = mount(UserContainer);
    const userStore = useUserStore();
    userStore.setInputValue('resolveTest');
    userStore.searchUser();
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(UserError).exists()).toBe(false);
    expect(wrapper.findComponent(UserComponent).exists()).toBe(false);
    expect(wrapper.findComponent(Loading).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should show UserComponent when there is a successful search', async () => {
    const wrapper = mount(UserContainer);
    const userStore = useUserStore();
    userStore.setInputValue('resolveTest');
    await userStore.searchUser();

    expect(wrapper.findComponent(Loading).exists()).toBe(false);
    expect(wrapper.findComponent(UserError).exists()).toBe(false);
    expect(wrapper.findComponent(UserComponent).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should show Error when there is a failed search', async () => {
    const wrapper = mount(UserContainer);
    const userStore = useUserStore();
    userStore.setInputValue('rejectTest');
    await userStore.searchUser();

    expect(wrapper.findComponent(Loading).exists()).toBe(false);
    expect(wrapper.findComponent(UserComponent).exists()).toBe(false);
    expect(wrapper.findComponent(UserError).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
