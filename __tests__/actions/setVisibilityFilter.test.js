import { setVisibilityFilter } from 'actions/setVisibilityFilter';

describe('actions', () => {
  it('should create an action to set a visibiilty filter', () => {
    const filter = 'SHOW_ALL';
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
    expect(setVisibilityFilter(filter)).toEqual(expectedAction);
  });
});
