import { describe, it, expect } from 'vitest';
import { langSeparator } from '../langSeparator';
import { repos } from '@/mock';
describe('langSeparator', () => {
  it('should separate langs from repos and count them', () => {
    const result = langSeparator(repos);
    const expected = [
      { name: 'Javascript', count: 3 },
      { name: 'HTML', count: 2 },
      { name: 'Python', count: 1 },
      { name: 'Ruby', count: 1 },
      { name: 'Java', count: 1 },
      { name: 'C++', count: 1 },
      { name: 'Typescript', count: 1 },
    ];
    expect(result).toEqual(expected);
  });

  it('should match snapshot', () => {
    const result = langSeparator(repos);
    expect(result).toMatchSnapshot();
  });
});
