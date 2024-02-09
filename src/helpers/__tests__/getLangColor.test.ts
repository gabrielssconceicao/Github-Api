import { describe, it, expect } from 'vitest';
import { getLangColor, languageColors } from '../getLangColor';

describe('getLangColor', () => {
  it('should return the correct color for the given language', () => {
    const color = getLangColor('JavaScript');
    expect(languageColors.JavaScript).toBe(color);

    const color2 = getLangColor('Python');
    expect(languageColors.Python).toBe(color2);

    const color3 = getLangColor('Java');
    expect(languageColors.Java).toBe(color3);

    expect(getLangColor('JavaScript')).toMatchSnapshot(
      'getLangColor("JavaScript")',
    );
    expect(getLangColor('Python')).toMatchSnapshot("getLangColor('Python')");
    expect(getLangColor('Java')).toMatchSnapshot("getLangColor('Java')");
  });

  it('should return the default color for an unknown language', () => {
    const color = getLangColor('Unknown');
    expect(color).toBe('#ffffff');
    expect(getLangColor('Unknown')).toMatchSnapshot("getLangColor('Unknown')");
  });
});
