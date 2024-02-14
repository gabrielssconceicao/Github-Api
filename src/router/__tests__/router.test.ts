import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import router from '..';
import HomeView from '@/views/HomeView.vue';
import ReposView from '@/views/ReposView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
describe('Route - /', () => {
  it('deve renderizar a rota Home corretamente', async () => {
    const wrapper = mount(
      { template: '<router-view />' },
      {
        global: {
          plugins: [router],
        },
      },
    );

    await router.push('/');
    await router.isReady();

    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });

  it('Route - /:login/repos', async () => {
    const wrapper = mount(
      { template: '<router-view />' },
      {
        global: {
          plugins: [router],
        },
      },
    );

    await router.push('/testeuser/repos');
    await router.isReady();

    expect(wrapper.findComponent(ReposView).exists()).toBe(true);
  });

  it('Route - /:pathMatch(.*)*', async () => {
    const wrapper = mount(
      { template: '<router-view />' },
      {
        global: {
          plugins: [router],
        },
      },
    );
    await router.push('/otherRoute');
    await router.isReady();

    expect(wrapper.findComponent(NotFoundView).exists()).toBe(true);
  });
});
