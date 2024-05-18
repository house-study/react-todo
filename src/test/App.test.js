import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('TODO', () => {
  test('에서 할 일이 없으면 "할 일 없음"이 화면에 보여져야 한다.', () => {
    render(<App />);
    expect(screen.getByText('할 일이 없습니다.')).toBeInTheDocument();
  });

  test('에서 새로운 할 일을 추가할 수 있다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '새 할 일' } });
    fireEvent.click(addButton);

    expect(screen.getByText('새 할 일')).toBeInTheDocument();
  });

  test('에서 할 일이 있으면 할 일 목록이 화면에 보여져야 한다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '첫 번째 할 일' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: '두 번째 할 일' } });
    fireEvent.click(addButton);

    expect(screen.getByText('첫 번째 할 일')).toBeInTheDocument();
    expect(screen.getByText('두 번째 할 일')).toBeInTheDocument();
  });

  test('에서 할 일을 완료할 수 있다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '완료할 할 일' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('에서 할 일을 삭제할 수 있다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '삭제할 할 일' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('삭제');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('삭제할 할 일')).not.toBeInTheDocument();
  });

  test('에서 여러개의 할 일을 추가하면, 최근의 할일이 가장 상단에 위치한다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '첫 번째 할 일' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: '두 번째 할 일' } });
    fireEvent.click(addButton);

    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('두 번째 할 일');
    expect(items[1]).toHaveTextContent('첫 번째 할 일');
  });

  test('에서 여러개의 할 일을 완료 할 수 있다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '첫 번째 할 일' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: '두 번째 할 일' } });
    fireEvent.click(addButton);

    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    const secondCheckbox = screen.getAllByRole('checkbox')[1];

    fireEvent.click(firstCheckbox);
    fireEvent.click(secondCheckbox);

    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).toBeChecked();
  });

  test('에서 여러개의 할 일을 삭제 할 수 있다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '첫 번째 할 일' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: '두 번째 할 일' } });
    fireEvent.click(addButton);

    const firstDeleteButton = screen.getAllByText('삭제')[0];
    const secondDeleteButton = screen.getAllByText('삭제')[1];

    fireEvent.click(firstDeleteButton);
    fireEvent.click(secondDeleteButton);

    expect(screen.queryByText('첫 번째 할 일')).not.toBeInTheDocument();
    expect(screen.queryByText('두 번째 할 일')).not.toBeInTheDocument();
  });

  test('에서 삭제 후 할 일이 없으면 "할 일이 없습니다."가 화면에 보여져야 한다.', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '할 일' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('삭제');
    fireEvent.click(deleteButton);

    expect(screen.getByText('할 일이 없습니다.')).toBeInTheDocument();
  });

  test('에서 완료 된 할 일을 삭제하면, 완료한 할 일의 갯수가 줄어야 한다.', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해주세요.');
    const addButton = screen.getByText('추가');

    fireEvent.change(input, { target: { value: '완료한 할 일' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    fireEvent.change(input, { target: { value: '할 일 1' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: '할 일 2' } });
    fireEvent.click(addButton);

    const firstDeleteButton = screen.getAllByText('삭제')[2];
    fireEvent.click(firstDeleteButton);

    expect(screen.queryByText('완료한 할 일')).not.toBeInTheDocument();

    const completeCount = screen
      .getAllByRole('checkbox')
      .filter(cb => cb.checked).length;

    expect(completeCount).toBe(0);
  });
});
