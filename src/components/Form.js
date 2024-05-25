import PropTypes from 'prop-types';
import { useState } from 'react';

function Form({ onAddTodo }) {
  const [todo, setTodo] = useState('');
  const Addtodo = () => {
    if (todo === '') return;
    onAddTodo(todo);
    setTodo('');
  };
  const UpdatedTodo = e => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={UpdatedTodo}
        placeholder="할 일을 입력해주세요."
      />
      <button type="button" onClick={Addtodo}>
        추가
      </button>
    </div>
  );
}

Form.propTypes = {
  /**
   * 할 일 추가 함수
   * @param {string} todo 추가할 할 일
   */
  onAddTodo: PropTypes.func.isRequired,
};

export default Form;
