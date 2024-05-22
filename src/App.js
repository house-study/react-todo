import { useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todos, setTodos] = useState([]);
  const [deleteComplete, setdeleteComplete] = useState(false);
  const addTodo = newTodo => {
    const newId = todos.length > 0 ? todos[0].id + 1 : 1;
    setTodos([{ id: newId, text: newTodo, isCompleted: false }, ...todos]);
    setdeleteComplete(false);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    setdeleteComplete(true);
  };

  const completeTodo = (id, isCompleted) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  const deleteAll = () => {
    setTodos([]);
    setdeleteComplete(true);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <p> {deleteComplete ? '할 일이 없습니다.' : '할 일이 없습니다.'} </p>
      ) : (
        <div>
          <ul>
            {todos.map(todo => (
              <Item
                key={todo.id}
                id={todo.id}
                todo={todo.text}
                isCompleted={todo.isCompleted}
                onDeleteTodo={deleteTodo}
                onCompleteTodo={completeTodo}
              />
            ))}
          </ul>
          <button type="button" onClick={deleteAll}>
            전체 삭제
          </button>
        </div>
      )}
    </div>
  );
}

export default App;