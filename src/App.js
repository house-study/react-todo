import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = newTodo => {
    const uuid = uuidv4();
    const newTodoForm = {
      id: uuid,
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
    </div>
  );
}

export default App;

// TODO: Todo App을 구현합니다.
// TODO: [] 할 일이 없으면 "할 일 없음"이 화면에 보여집니다.
// TODO: [] <Form />에서 입력한 할 일을 <Item />로 보여줍니다.
// TODO: [] 최근에 추가한 할 일이 위에 보여집니다.
