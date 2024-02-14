import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ReposView from '../ReposView.vue';
import Loading from '@/components/LoadingComponent.vue';
import RepositoriesContainer from '@/components/RepositoriesContainer.vue';
import { useUserStore } from '@/stores/user';
describe('<ReposView />', () => {
  it('should render correctly', async () => {
    const useUser = useUserStore();
    useUser.setInputValue('resolveTest');
    useUser.searchUser();
    const wrapper = mount(ReposView);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(Loading).exists()).toBe(true);
    expect(wrapper.findComponent(RepositoriesContainer).exists()).toBe(false);
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(Loading).exists()).toBe(true);
    expect(wrapper.findComponent(RepositoriesContainer).exists()).toBe(false);
  });

  it('should match snapshot', async () => {
    const useUser = useUserStore();
    useUser.setInputValue('resolveTest');
    await useUser.searchUser();
    const wrapper = mount(ReposView);

    expect(wrapper.element).toMatchSnapshot();
  });
});
