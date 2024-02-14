import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ReposContainer from '../RepositoriesContainer.vue';
import ReposHeader from '../ReposHeader.vue';
import ReposFilter from '../ReposFilterComponent.vue';
import ReposComponent from '../ReposComponent.vue';

import { useUserStore } from '@/stores/user';
import { useReposStore } from '@/stores/repos';

describe('<RepositoriesContainer/>', () => {
  it('should render with the correct data', async () => {
    const useUser = useUserStore();
    const useRepos = useReposStore();
    useUser.setInputValue('resolveTest');
    await useUser.searchUser();

    await useRepos.getRepos();

    const wrapper = mount(ReposContainer);
    expect(wrapper.findComponent(ReposHeader).exists()).toBe(true);
    expect(wrapper.find('section#repos').exists()).toBe(true);
    expect(wrapper.findComponent(ReposFilter).exists()).toBe(true);
    expect(wrapper.findComponent(ReposComponent).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should filter', async () => {
    const useUser = useUserStore();
    const useRepos = useReposStore();
    useUser.setInputValue('resolveTest');
    await useUser.searchUser();

    await useRepos.getRepos();

    const wrapper = mount(ReposContainer);
    const filter = wrapper.findComponent(ReposFilter);
    await filter.findAll('button')[1].trigger('click');

    expect(wrapper.findAll('div#repo').length).toBe(
      useRepos.filteredRepos.length,
    );

    expect(wrapper.element).toMatchSnapshot();
  });
});
