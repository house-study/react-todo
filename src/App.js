import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = todo => {
    setTodos([
      {
        id: uuidv4(),
        todo,
        isCompleted: false,
      },
      ...todos,
    ]);
  };

  const onDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onCompleteTodo = (id, isCompleted) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={onAddTodo} />
      {todos.length === 0 && <p>할 일이 없습니다.</p>}
      <ul>
        {todos.map(({ id, todo, isCompleted }) => (
          <Item
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
