# 문제

> Todo App을 구현하기 위해 `<App />`, `<Form />`, `<Item />`를 구현하세요. 모든 테스트를 통과해야 합니다.

# 조건

## `<App />`

- Todo App을 구현합니다.
- 할 일이 없으면 "할 일 없음"이 화면에 보여집니다.
- `<Form />`에서 입력한 할 일을 `<Item />`로 보여줍니다.
- 최근에 추가한 할 일이 위에 보여집니다.

## `<Form />`

- 할 일을 입력할 수 있는 input과 추가 버튼이 있습니다.
- input에 할 일을 입력하고 추가 버튼을 누르면 `onAdd` 함수가 호출됩니다.
  - `onAdd` 함수는 input에 `입력한 값`을 인자로 받습니다.
- 추가 버튼을 누르면 input의 값이 초기화됩니다.
- input에 입력한 값이 없다면 추가 버튼을 눌러도 `onAdd` 함수가 호출되지 않습니다.

## `<Item />`

- 할 일을 보여줍니다.
- 체크 버튼을 누르면 `onCompleteTodo` 함수가 호출됩니다.
  - `onCompleteTodo` 함수는 할 일의 `id`와 `check 상태`를 인자로 받습니다.
- 삭제 버튼을 누르면 `onDeleteTodo` 함수가 호출됩니다.
  - `onDeleteTodo` 함수는 할 일의 `id`를 인자로 받습니다.

# 준비

## package 설치

```bash
$ npm install
```

## ESLint & Prettier Extension 설치

- VSCode를 사용하신다면 아래 확장 프로그램을 설치하세요.
- ESLint Extension을 설치하세요.
- Prettier Extension을 설치하세요.
- `.eslintrc.js` 파일을 참고하여 설정을 변경하지 마세요.

## 실행

```bash
$ npm start
```

## 테스트

모든 테스트 케이스를 통과하면 됩니다.

```bash
$ npm test
```

# 주의 사항

- PropTypes을 수정하지 마세요.
  - 만약 PropTypes이 잘못되었다고 생각되면 디스코드에 말씀해주세요.
- 테스트 케이스를 수정하면 안됩니다.
  - 만약 테스트 케이스가 잘못되었다고 생각되면 디스코드에 말씀해주세요.
- package.json에 있는 모듈은 삭제하면 안됩니다.
  - 만약 다른 모듈을 추가하고 싶다면 디스코드에 말씀해주세요.

# 제출

1. 이름/닉네임으로 branch를 만들고 작업을 하세요.
2. 작업이 끝나면 PR을 보내주세요.
3. CI가 통과하면 완료입니다.
