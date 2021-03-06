import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos:       PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default TodoList;
