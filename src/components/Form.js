import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ onAddTodo }) {
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!todo) {
      return;
    }
    onAddTodo(todo);
    setTodo('');
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요."
      />
      <button type="button" onClick={handleAddTodo}>
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
