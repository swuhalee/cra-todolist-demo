import TodoItem from "./TodoItem";

const TodoBoard = ({ todos, getTasks }) => {
  return (

    <div>
      <h2>Todo List</h2>
      {todos.length > 0 ? todos.map(todo => <TodoItem key={todo.id} todo={todo} getTasks={getTasks} />) : <h2>There is no Item to show</h2>}
    </div>
  );
};

export default TodoBoard;
