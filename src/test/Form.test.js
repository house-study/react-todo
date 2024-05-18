import { fireEvent, render } from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {
  test('은 placeholder로 "할 일을 입력해주세요."을 가지고 있습니다.', () => {
    const { getByPlaceholderText } = render(<Form />);
    const input = getByPlaceholderText('할 일을 입력해주세요.');

    expect(input).toBeInTheDocument();
  });

  test('은 "추가" 버튼이 있다.', () => {
    const { getByText } = render(<Form />);
    const button = getByText('추가');

    expect(button).toBeInTheDocument();
  });

  test('에 할 일을 입력을 할 수 있다.', () => {
    const { getByPlaceholderText } = render(<Form />);
    const input = getByPlaceholderText('할 일을 입력해주세요.');

    fireEvent.change(input, { target: { value: '아무것도 하지 않기' } });

    expect(input).toHaveValue('아무것도 하지 않기');
  });

  test('에 입력을 하지 않고 "추가" 버튼을 누르면 onAddTodo에 값을 넘겨 주지 않는다.', () => {
    const onAddTodo = jest.fn();
    const { getByText } = render(<Form onAddTodo={onAddTodo} />);
    const button = getByText('추가');

    fireEvent.click(button);

    expect(onAddTodo).not.toHaveBeenCalled();
  });

  test('에 입력을 하고 "추가" 버튼을 누르면 onAddTodo에 값을 넘겨 준다.', () => {
    const onAddTodo = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form onAddTodo={onAddTodo} />,
    );
    const input = getByPlaceholderText('할 일을 입력해주세요.');
    const button = getByText('추가');

    fireEvent.change(input, { target: { value: '아무것도 하지 않기' } });
    fireEvent.click(button);

    expect(onAddTodo).toHaveBeenCalledWith('아무것도 하지 않기');
  });

  test('에 입력을 하고 "추가" 버튼을 누르면 입력값이 초기화 된다.', () => {
    const onAddTodo = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form onAddTodo={onAddTodo} />,
    );
    const input = getByPlaceholderText('할 일을 입력해주세요.');
    const button = getByText('추가');

    fireEvent.change(input, { target: { value: '아무것도 하지 않기' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });
});
