form 
import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ onAddTodo }) {
  const [toDo, setTodo] = useState('');
  const AddToDo = () => {
    if (toDo === '') return;
    onAddTodo(toDo);
    setTodo('');
  };
  const doList = value => {
    const lists = value.target.value;
    setTodo(lists);
  };
  return (
    <div>
      <input
        type="text"
        value={toDo}
        onChange={doList}
        placeholder="할 일을 입력해주세요."
      />
      <button type="button" onClick={AddToDo}>
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