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
// JS - 3
// HTML - 2
// python - 1
// Ruby - 1
//Java - 1
//C++ - 1
//Typescript - 1
export const repos: IRepos[] = [
  {
    name: 'Teste Repo 1',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
  },
  {
    name: 'Teste Repo 2',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'HTML',
  },
  {
    name: 'Teste Repo 3',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Python',
  },
  {
    name: 'Teste Repo 4',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
  },
  {
    name: 'Teste Repo 5',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Javascript',
  },
  {
    name: 'Teste Repo 6',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'HTML',
  },
  {
    name: 'Teste Repo 7',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Ruby',
  },
  {
    name: 'Teste Repo 8',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Java',
  },
  {
    name: 'Teste Repo 9',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'C++',
  },
  {
    name: 'Teste Repo 10',
    description: 'lorem ipsum dolor sit amet',
    html_url: 'https://github.com/testeuser/testerepo',
    language: 'Typescript',
  },
];
