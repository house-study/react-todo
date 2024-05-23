import { useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = newTodo => {
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={addTodo} />
      <ul>
        <Item />
      </ul>
    </div>
  );
}

export default App;

// TODO: Todo App을 구현합니다.
// TODO: [] 할 일이 없으면 "할 일 없음"이 화면에 보여집니다.
// TODO: [] <Form />에서 입력한 할 일을 <Item />로 보여줍니다.
// TODO: [] 최근에 추가한 할 일이 위에 보여집니다.
