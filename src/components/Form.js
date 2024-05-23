import PropTypes from 'prop-types';
import { useState } from 'react';
import './Form.css';

function Form({ onAddTodo }) {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
  };
  const onAdd = e => {
    e.preventDefault();
    if (value.trim() !== '') {
      onAddTodo(value);
      setValue('');
    }
  };
  return (
    <form onSubmit={onAdd}>
      <input
        className="inputTodo"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력해주세요."
      />
      <button className="addButton" type="submit">
        추가
      </button>
    </form>
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
