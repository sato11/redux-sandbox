import { addTodo } from 'actions/addTodo';

describe('actions', () => {
  it('should create an action to create a new todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: 'ADD_TODO',
      id:   0,
      text,
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });
});
