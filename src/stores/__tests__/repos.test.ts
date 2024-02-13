import { describe, it, expect } from 'vitest';
import { useReposStore } from '../repos';
import { useUserStore } from '../user';
import { langSeparator } from '@/helpers/langSeparator';
import { repos as mockRepos } from '@/mock/index';
describe('useReposStore', () => {
  it('init with all empty', () => {
    const useRepos = useReposStore();

    expect(useRepos.repos.length).toBe(0);
    expect(useRepos.reposUrl).toBe('');
    expect(useRepos.filterValue).toBe('');
    expect(useRepos.filteredRepos.length).toBe(0);
    expect(useRepos.filteredReposCount.length).toBe(0);
    expect({
      repos: useRepos.repos,
      reposUrl: useRepos.reposUrl,
      filterValue: useRepos.filterValue,
      filteredRepos: useRepos.filteredRepos,
      filteredReposCount: useRepos.filteredReposCount,
    }).toMatchSnapshot();
  });

  it('should change the value of: repos, repoUrl, filteredRepos, filteredReposCount', async () => {
    const useRepos = useReposStore();
    const useUser = useUserStore();
    useUser.setInputValue('resolveTest');
    await useUser.searchUser();
    useRepos.setReposUrl(useUser.githubUser.user.repos_url);
    await useRepos.getRepos();

    expect(useRepos.repos.length).toBe(mockRepos.length);
    expect(useRepos.reposUrl).toBe(useUser.githubUser.user.repos_url);
    expect(useRepos.filteredRepos.length).toBe(mockRepos.length);
    expect(useRepos.filteredReposCount.length).toBe(
      langSeparator(mockRepos).length,
    );

    expect({
      repos: useRepos.repos,
      reposUrl: useRepos.reposUrl,
      filterValue: useRepos.filterValue,
      filteredRepos: useRepos.filteredRepos,
      filteredReposCount: useRepos.filteredReposCount,
    }).toMatchSnapshot();
  });

  it('should filter repos', async () => {
    const useRepos = useReposStore();
    const useUser = useUserStore();
    useUser.setInputValue('resolveTest');
    await useUser.searchUser();
    useRepos.setReposUrl(useUser.githubUser.user.repos_url);
    await useRepos.getRepos();

    useRepos.setFilter('HTML');
    expect(useRepos.filteredRepos.length).toBe(2);

    useRepos.setFilter('');
    expect(useRepos.filteredRepos.length).toBe(mockRepos.length);

    useRepos.setFilter('HTML');
    expect(useRepos.filteredRepos.length).toBe(2);

    expect({
      repos: useRepos.repos,
      reposUrl: useRepos.reposUrl,
      filterValue: useRepos.filterValue,
      filteredRepos: useRepos.filteredRepos,
      filteredReposCount: useRepos.filteredReposCount,
    }).toMatchSnapshot();
  });
});
