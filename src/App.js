import Form from './components/Form';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form />
      <ul>
        <Item />
      </ul>
    </div>
  );
}

export default App;
