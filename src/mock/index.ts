import { type IUser } from '@/types/user';
import { type IRepos } from '@/types/repos';

export const user: IUser = {
  name: 'Teste User',
  login: 'testeuser',
  avatar_url: 'https://avatars.githubusercontent.com/u/10590076?v=4',
  followers: 0,
  following: 5,
  location: 'Brazil',
  html_url: 'https://github.com/testeuser',
  bio: 'lorem ipsum dolor sit amet',
  public_repos: 5,
};

export const repos: IRepos[] = [
  {
    name: 'Teste Repo 1',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
    id: 1,
  },
  {
    name: 'Teste Repo 2',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'HTML',
    id: 2,
  },
  {
    name: 'Teste Repo 3',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Python',
    id: 3,
  },
  {
    name: 'Teste Repo 4',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
    id: 4,
  },
  {
    name: 'Teste Repo 5',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
    id: 5,
  },
  {
    name: 'Teste Repo 6',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'HTML',
    id: 6,
  },
  {
    name: 'Teste Repo 7',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Ruby',
    id: 7,
  },
  {
    name: 'Teste Repo 8',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Java',
    id: 8,
  },
  {
    name: 'Teste Repo 9',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'C++',
    id: 9,
  },
  {
    name: 'Teste Repo 10',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Typescript',
    id: 10,
  },
];
