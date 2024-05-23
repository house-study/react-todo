import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = newTodo => {
    const newTodoForm = {
      id: uuidv4(),
      todo: newTodo,
      isCompleted: false,
    };
    const newTodoList = [newTodoForm, ...todoList];
    setTodoList(newTodoList);
  };

  const deleteTodo = id => {
    const newTodoList = todoList.filter(todo => {
      if (todo.id === id) return false;
      return true;
    });
    setTodoList(newTodoList);
  };

  const completeTodo = (id, isCompleted) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo,
    );
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={addTodo} />
      {todoList.length === 0 ? (
        <div>할 일이 없습니다. </div>
      ) : (
        <ul>
          {todoList?.map(todo => {
            return (
              <Item
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                isCompleted={todo.isCompleted}
                onDeleteTodo={deleteTodo}
                onCompleteTodo={completeTodo}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;

// TODO: [] 할 일이 없으면 "할 일 없음"이 화면에 보여집니다.
