import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ReposComponent from '../ReposComponent.vue';
import { repos } from '@/mock';
import { getLangColor } from '@/helpers/getLangColor';

describe('ReposComponent', () => {
  it('should render correctly', () => {
    const repo = repos[0];
    const wrapper = mount(ReposComponent, {
      props: {
        repos: repo,
      },
    });
    const div = wrapper.findComponent(ReposComponent);
    expect(div.exists()).toBe(true);

    const langColor = getLangColor(repo.language);
    expect(div.attributes('style')).toBe(`--lang-color: ${langColor};`);
    expect(div.find('h3').text()).toBe(repo.name);
    expect(div.find('p[aria-label="repo-description"]').text()).toBe(
      repo.description,
    );

    expect(div.find('p[aria-label="repo-language"]').text()).toBe(
      repo.language,
    );
    expect(div.find('a').attributes('href')).toBe(repo.html_url);
    expect(div.find('a').attributes('target')).toBe('_blank');

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should not render p[aria-label="repo-description"] if description is null', () => {
    const repo = repos[0];
    const wrapper = mount(ReposComponent, {
      props: {
        repos: { ...repo, description: null },
      },
    });
    const div = wrapper.findComponent(ReposComponent);
    expect(div.exists()).toBe(true);
    expect(div.find('p[aria-label="repo-description"]').exists()).toBe(false);
    expect(wrapper.element).toMatchSnapshot();
  });
});
