import reducer from 'reducers/todos';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(reducer([], {
      type: 'ADD_TODO',
      text: 'Run the test.',
    })).toEqual([
      {
        text:      'Run the test.',
        completed: false,
      },
    ]);

    expect(reducer([
      {
        text:      'Use redux.',
        id:        0,
        completed: false,
      },
    ], {
      type: 'ADD_TODO',
      text: 'Run the test.',
    })).toEqual([
      {
        text:      'Use redux.',
        id:        0,
        completed: false,
      },
      {
        text:      'Run the test.',
        completed: false,
      },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(reducer([
      {
        text:      'Run the test.',
        id:        0,
        completed: false,
      },
    ], {
      type: 'TOGGLE_TODO',
      id:   0,
    })).toEqual([
      {
        text:      'Run the test.',
        id:        0,
        completed: true,
      },
    ]);
  });
});
