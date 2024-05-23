import PropTypes from 'prop-types';
import './Item.css';

function Item({ id, todo, isCompleted, onCompleteTodo, onDeleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onCompleteTodo(id, !isCompleted)}
      />
      <span className="todo">{todo}</span>
      <div>
        <button
          className="deleteButton"
          type="button"
          onClick={() => onDeleteTodo(id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default Item;
