import PropTypes from 'prop-types';

function Form({ onAddTodo }) {
  return (
    <div>
      <input type="text" />
      <button type="button">추가</button>
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
