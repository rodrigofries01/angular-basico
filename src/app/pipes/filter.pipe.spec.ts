import { AppFilter } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new AppFilter();
    expect(pipe).toBeTruthy();
  });
});
