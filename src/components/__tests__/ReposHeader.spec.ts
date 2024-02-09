import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ReposHeader from '../ReposHeader.vue';
import { user } from '@/mock';

describe('<ReposHeader />', () => {
  it('should render with userName', () => {
    const wrapper = mount(ReposHeader, {
      props: {
        name: user.name as string,
      },
    });

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe(`${user.name} Repos`);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render with login', () => {
    const wrapper = mount(ReposHeader, {
      props: {
        name: null || user.login,
      },
    });
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe(`${user.login} Repos`);
    expect(wrapper.element).toMatchSnapshot();
  });
});
