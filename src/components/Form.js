import PropTypes from 'prop-types';
import { useState } from 'react';

function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const OnAdd = newTodo => {
    onAddTodo(newTodo);
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

// TODO: input에 입력한 값이 없다면 추가 버튼을 눌러도 onAdd 함수가 호출되지 않습니다
