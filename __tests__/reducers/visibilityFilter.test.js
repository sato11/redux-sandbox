import reducer from 'reducers/visibilityFilter';

describe('visibilityFilter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('SHOW_ALL');
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    const filter = 'SHOW_ACTIVE';
    expect(reducer(undefined, {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    })).toEqual(filter);
  });
});
