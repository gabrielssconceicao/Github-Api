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

  it('should init without class selected', () => {
    const langs = langSeparator(repos);
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langs,
      },
    });
    for (let i = 0; i < wrapper.find('div').findAll('button').length; i++) {
      expect(wrapper.find('div').findAll('button')[i].classes()).not.toContain(
        'selected',
      );
    }
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have class selected when clicked and unselected when click in another button', async () => {
    const langs = langSeparator(repos);
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langs,
      },
    });
    const button = wrapper.find('div').findAll('button')[0];
    const button2 = wrapper.find('div').findAll('button')[3];

    await button.trigger('click');
    expect(button.classes()).toContain('selected');
    expect(button2.classes()).not.toContain('selected');

    await button2.trigger('click');
    expect(button.classes()).not.toContain('selected');
    expect(button2.classes()).toContain('selected');

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should clean the selected buttons', async () => {
    const langs = langSeparator(repos);
    const wrapper = mount(ReposFilter, {
      props: {
        filters: langs,
      },
    });
    const allButtons = wrapper.find('div').findAll('button');
    const button = allButtons[0];
    await button.trigger('click');
    const clearButton = allButtons[allButtons.length - 1];
    await clearButton.trigger('click');
    console.log(clearButton);
    for (let i = 0; i < allButtons.length; i++) {
      expect(allButtons[i].classes()).not.toContain('selected');
    }
  });
});
