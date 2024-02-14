import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ReposFilter from '../ReposFilterComponent.vue';

import { repos } from '@/mock';
import { langSeparator } from '@/helpers/langSeparator';

const separedLangs = langSeparator(repos);

describe('<ReposFilter', () => {
  it('should render correctly', () => {
    const wrapper = mount(ReposFilter);
    expect(wrapper.exists()).toBe(true);
    const btns = wrapper.findAll('button');
    expect(btns.length).toBe(1);
    expect(btns[0].text()).toBe('Clear');
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render with filter', () => {
    const wrapper = mount(ReposFilter, {
      props: {
        filters: separedLangs,
      },
    });

    const btns = wrapper.findAll('button');
    expect(btns.length).toBe(separedLangs.length + 1);

    for (let i = 1; i < btns.length; i++) {
      expect(btns[i].text()).toBe(
        `${separedLangs[i - 1].name}${separedLangs[i - 1].count}`,
      );
    }

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should check if when the button is clicked', async () => {
    const wrapper = mount(ReposFilter, {
      props: {
        filters: separedLangs,
      },
    });

    const btns = wrapper.findAll('button');

    await btns[2].trigger('click');

    expect(wrapper.emitted('filter')).toBeTruthy();
    expect(wrapper.emitted('filter')).toHaveLength(1);
    expect(btns[2].classes()).includes('selected');

    await btns[0].trigger('click');
    expect(btns[2].classes()).not.includes('selected');

    await btns[2].trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have the name No Language', () => {
    const reposWithNull = [...repos];
    reposWithNull[1].language = null;
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langSeparator(reposWithNull),
      },
    });

    const btns = wrapper.findAll('button');

    expect(btns[2].text()).toBe('No Language1');
    expect(wrapper.element).toMatchSnapshot();
  });
});
