import PropTypes from 'prop-types';

function Item({ id, todo, isCompleted, onDeleteTodo, onCompleteTodo }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{todo}</p>
      <div>
        <button type="button">삭제</button>
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

// TODO: 할 일을 보여줍니다.
// TODO: 체크 버튼을 누르면 onCompleteTodo 함수가 호출됩니다.
// TODO: onCompleteTodo 함수는 할 일의 id와 check 상태를 인자로 받습니다.
// TODO: 삭제 버튼을 누르면 onDeleteTodo 함수가 호출됩니다.
// TODO: onDeleteTodo 함수는 할 일의 id를 인자로 받습니다.
