import { fireEvent, render } from '@testing-library/react';
import Item from '../components/Item';

describe('Item', () => {
  test('의 todo props를 넣으면, 화면에 보여진다.', () => {
    const { getByText } = render(<Item todo="아무것도 하지 않기" />);
    const text = getByText('아무것도 하지 않기');

    expect(text).toBeInTheDocument();
  });

  test('의 isCompleted props가 true이면, 체크 박스가 체크된다.', () => {
    const { getByRole } = render(
      <Item todo="아무것도 하지 않기" isCompleted />,
    );
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('의 체크 박스를 누르면, onComplete 함수가 호출된다.', () => {
    const onCompleteTodo = jest.fn();
    const id = 1;
    const { getByRole } = render(
      <Item
        id={id}
        todo="아무것도 하지 않기"
        isCompleted
        onCompleteTodo={onCompleteTodo}
      />,
    );
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onCompleteTodo).toHaveBeenCalledWith(id, false);
  });

  test('의 삭제 버튼을 누르면, onDelete 함수가 호출된다.', () => {
    const onDeleteTodo = jest.fn();
    const id = 3;
    const { getByText } = render(
      <Item todo="아무것도 하지 않기" id={id} onDeleteTodo={onDeleteTodo} />,
    );
    const button = getByText('삭제');

    fireEvent.click(button);

    expect(onDeleteTodo).toHaveBeenCalledWith(id);
  });
});
