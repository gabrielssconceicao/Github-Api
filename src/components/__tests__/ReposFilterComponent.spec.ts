import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ReposFilter from '../ReposFilterComponent.vue';
import { repos } from '@/mock';
import { langSeparator } from '@/helpers/langSeparator';

describe('<ReposFilter />', () => {
  it('should render correcty', () => {
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langSeparator([]),
      },
    });
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should have only one button', () => {
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langSeparator([]),
      },
    });
    expect(wrapper.findAll('button').length).toBe(1);
    expect(wrapper.findAll('button')[0].text()).toBe('Clear Filter');
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have more than one button', () => {
    const langs = langSeparator(repos);
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langs,
      },
    });
    expect(wrapper.find('div').findAll('button').length).toBe(langs.length + 1);
    expect(wrapper.element).toMatchSnapshot();
  });
});
