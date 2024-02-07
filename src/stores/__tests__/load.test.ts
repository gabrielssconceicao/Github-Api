import { describe, it, expect } from 'vitest';
import { useLoadStore } from '../load';

describe('loadStore', () => {
  it('should init with load = false', () => {
    const loadStore = useLoadStore();
    expect(loadStore.loading).toBe(false);
    expect({ loading: loadStore.loading }).toMatchSnapshot();
  });

  it('should change load to true', () => {
    const loadStore = useLoadStore();
    loadStore.setLoading();
    expect(loadStore.loading).toBe(true);
    expect({ loading: loadStore.loading }).toMatchSnapshot();
  });

  it('should change load to false', () => {
    const loadStore = useLoadStore();
    loadStore.setNotLoading();
    expect(loadStore.loading).toBe(false);
    expect({ loading: loadStore.loading }).toMatchSnapshot();
  });
});
