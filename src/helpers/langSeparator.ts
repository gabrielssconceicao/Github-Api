import type { IRepos } from '@/types/repos';
type ILang = { name: string; count: number };
export const langSeparator = (repos: IRepos[]): ILang[] => {
  const langs: ILang[] = [];
  repos.forEach((repo) => {
    const lang = repo.language;
    const index = langs.findIndex((l) => l.name === lang);
    console.log(index);
    if (index === -1) {
      langs.push({ name: lang, count: 1 });
    } else {
      langs[index].count += 1;
    }
    console.log(langs);
  });
  return langs;
};
