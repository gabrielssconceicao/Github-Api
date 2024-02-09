import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import { repos } from '@/mock';
import { langSeparator } from '@/helpers/langSeparator';
import ReposSelect from '../ReposSelectComponent.vue';

describe('<ReposSelect />', () => {
  it('should render with empty repos', () => {
    const wrapper = mount(ReposSelect, {
      props: {
        langs: [],
      },
    });
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.findAll('option').length).toBe(1);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render with the langs', () => {
    const langsArray = langSeparator(repos);
    const wrapper = mount(ReposSelect, {
      props: {
        langs: langsArray,
      },
    });
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.findAll('option').length).toBe(langsArray.length + 1);
    expect(wrapper.element).toMatchSnapshot();
  });
});
