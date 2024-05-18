import PropTypes from 'prop-types';

function Item({ id, todo, isCompleted, onDeleteTodo, onCompleteTodo }) {
  const handleDeleteTodo = () => {
    onDeleteTodo(id);
  };

  const handleCompleteTodo = e => {
    onCompleteTodo(id, e.target.checked);
  };

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={handleCompleteTodo}
      />
      <p>{todo}</p>
      <div>
        <button type="button" onClick={handleDeleteTodo}>
          삭제
        </button>
      </div>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  /**
   * 할 일 삭제 함수
   * @param {number|string} id 삭제할 할 일의 id
   */
  onDeleteTodo: PropTypes.func.isRequired,
  /**
   * 할 일 완료 함수
   * @param {number|string} id 완료할 할 일의 id
   * @param {boolean} isCompleted 완료 여부
   */
  onCompleteTodo: PropTypes.func.isRequired,
};

export default Item;
