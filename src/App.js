import { useRef, useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todos, setTodos] = useState([]);
  const Id = useRef(1);

  const handleAdd = newTodo => {
    const newTodoItem = {
      id: Id.current,
      todo: newTodo,
      isCompleted: false,
    };
    setTodos([newTodoItem, ...todos]);
    Id.current += 1;
  };

  const handleCompleted = (id, isCompleted) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={handleAdd} />
      {todos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <Item
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              onCompleteTodo={handleCompleted}
              onDeleteTodo={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
