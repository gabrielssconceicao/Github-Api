import type { ILang } from '@/types/langCount';
import type { IRepos } from '@/types/repos';

export const langSeparator = (repos: IRepos[]): ILang[] => {
  const langs: ILang[] = [];
  repos.forEach((repo) => {
    const lang = repo.language;
    const index = langs.findIndex((l) => l.name === lang);
    if (index === -1) {
      langs.push({ name: lang || 'No Language', count: 1 });
    } else {
      langs[index].count += 1;
    }
  });
  return langs;
};
