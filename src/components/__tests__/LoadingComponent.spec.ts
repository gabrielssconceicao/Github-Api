import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Loading from '../LoadingComponent.vue';

describe('<Loading />', () => {
  it('should render', () => {
    const wrapper = mount(Loading);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', () => {
    const wrapper = mount(Loading);
    expect(wrapper.element).toMatchSnapshot();
  });
});
