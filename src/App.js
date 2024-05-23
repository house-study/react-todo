import { useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = todo => {
    const newTodo = {
      id: todos.length + 1,
      todo,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const handleCompleteTodo = (id, isCompleted) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={handleAddTodo} />
      <ul>
        {todos.length === 0 ? (
          <li>할 일이 없습니다.</li>
        ) : (
          todos.map(todo => (
            <Item
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              onCompleteTodo={handleCompleteTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
