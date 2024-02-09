export const languageColors: Record<string, string> = {
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  PHP: '#4F5D95',
  TypeScript: '#2b7489',
  Swift: '#ffac45',
  Ruby: '#CC342D',
  Go: '#00ADD8',
  R: '#198CE7',
  Kotlin: '#F18E33',
  Scala: '#c22d40',
  Rust: '#dea584',
  Dart: '#00B4AB',
  Perl: '#0298c3',
  Lua: '#000080',
  Matlab: '#e16737',
  Haskell: '#5e5086',
  SQL: '#e38c00',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Objective-C': '#438eff',
  Assembly: '#6E4C13',
  Shell: '#89e051',
  PowerShell: '#012456',
  Groovy: '#e69f56',
  Vue: '#41B883',
  Dockerfile: '#384d54',
  Clojure: '#db5855',
  Elixir: '#6e4a7e',
  D: '#ba595e',
  Julia: '#a270ba',
  Arduino: '#bd79d1',
  Verilog: '#b2b7f8',
  VHDL: '#adb2cb',
  Ada: '#02f88c',
  Scheme: '#1e4aec',
  'Objective-C++': '#6866fb',
  Crystal: '#000100',
};
export const getLangColor = (lang: string): string => {
  let language = '#ffffff';
  if (lang in languageColors) {
    language = languageColors[lang];
  }
  return language;
};