import PropTypes from 'prop-types';
import { useState } from 'react';

function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const OnAdd = newTodo => {
    onAddTodo(newTodo);
    setInputValue('');
  };

  const handleInputValueChange = e => {
    setInputValue(e.target.value);
  };

  const handleClickAddButton = () => {
    if (inputValue !== '') {
      OnAdd(inputValue);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputValueChange} />
      <button type="button" onClick={() => handleClickAddButton}>
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
