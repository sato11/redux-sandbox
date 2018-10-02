import { toggleTodo } from 'actions/toggleTodo';

describe('actions', () => {
  it('should create an action to create toggle todo', () => {
    const id = 0;
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id,
    };
    expect(toggleTodo(id)).toEqual(expectedAction);
  });
});
