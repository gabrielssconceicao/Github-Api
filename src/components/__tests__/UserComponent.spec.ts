import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserComponent from '../UserComponent.vue';
import { user as userMock } from '@/mock';

describe('<UserComponent />', () => {
  it('should render correctly', () => {
    const wrapper = mount(UserComponent, {
      props: {
        user: { ...userMock },
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);

    const userAvatar = wrapper.find('img[aria-label="avatar"]');
    expect(userAvatar.exists()).toBe(true);
    expect(userAvatar.attributes('src')).toBe(userMock.avatar_url);
    expect(userAvatar.attributes('alt')).toBe(`${userMock.login} avatar`);

    const userName = wrapper.find('h2');
    expect(userName.exists()).toBe(true);
    expect(userName.text()).toBe(userMock.name);

    const userLink = wrapper.find('a[aria-label="user-github-link"]');
    expect(userLink.exists()).toBe(true);
    expect(userLink.attributes('href')).toBe(userMock.html_url);
    const userLogin = userLink.find('span[aria-label="user-github-name"]');
    expect(userLogin.exists()).toBe(true);
    expect(userLogin.text()).toBe(userMock.login);

    const userBio = wrapper.find('p[aria-label="user-bio"');
    expect(userBio.exists()).toBe(true);
    expect(userBio.text()).toBe(userMock.bio);

    const userFollowers = wrapper.find('p[aria-label="user-followers"]');
    expect(userFollowers.exists()).toBe(true);
    expect(userFollowers.text()).toBe(`Followers ${userMock.followers}`);

    const userFollowing = wrapper.find('p[aria-label="user-following"]');
    expect(userFollowing.exists()).toBe(true);
    expect(userFollowing.text()).toBe(`Following ${userMock.following}`);

    const userRepos = wrapper.find('p[aria-label="user-repos"]');
    expect(userRepos.exists()).toBe(true);
    expect(userRepos.text()).toBe(`Public Repos ${userMock.public_repos}`);

    const userReposLink = wrapper.find('[aria-label="user-repos-link"]');
    expect(userReposLink.exists()).toBe(true);
  });

  it('should render correctly with null props', () => {
    const wrapper = mount(UserComponent, {
      props: {
        user: {
          ...userMock,
          name: null,
          location: null,
          bio: null,
        },
      },
    });

    const userName = wrapper.find('h2');
    expect(userName.exists()).toBe(false);

    const userBio = wrapper.find('p[aria-label="user-bio"');
    expect(userBio.exists()).toBe(false);

    const userFollowers = wrapper.find('p[aria-label="user-followers"]');
    expect(userFollowers.exists()).toBe(true);
    expect(userFollowers.text()).toBe(`Followers ${userMock.followers}`);

    const userFollowing = wrapper.find('p[aria-label="user-following"]');
    expect(userFollowing.exists()).toBe(true);
    expect(userFollowing.text()).toBe(`Following ${userMock.following}`);

    const userLink = wrapper.find('a[aria-label="user-github-link"]');
    expect(userLink.exists()).toBe(true);
    expect(userLink.attributes('href')).toBe(userMock.html_url);
    const userLogin = userLink.find('span[aria-label="user-github-name"]');
    expect(userLogin.exists()).toBe(true);
    expect(userLogin.text()).toBe(userMock.login);

    const userAvatar = wrapper.find('img[aria-label="avatar"]');
    expect(userAvatar.exists()).toBe(true);
    expect(userAvatar.attributes('src')).toBe(userMock.avatar_url);
    expect(userAvatar.attributes('alt')).toBe(`${userMock.login} avatar`);
  });

  it('should match snapshot', () => {
    const wrapper = mount(UserComponent, {
      props: {
        user: { ...userMock },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
