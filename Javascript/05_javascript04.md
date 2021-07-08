---
description: "Javascript_04 - Arrow Function은 무엇인가? 함수의 선언과 표현"
date: 2021-07-08
tags: ["Javascript"]
---

# Javascript_04 - Arrow Function은 무엇인가? 함수의 선언과 표현

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## function

- 프로그램을 구성하는 기본적인 building block
- subprogram이라고도 불리며 여러번 재사용 가능하다.
- 한 가지의 task를 수행하거나 값을 계산하기 위해 사용

## 함수 선언

- 형식 : function name(param1, param2) { body... return; }
- one function === one thing
  - 함수는 한 번에 한 가지 일만 하도록 만든다.
- naming: doSomething, command, verb
  - 동사, 명령형태로 이름짓는다.
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS
  - 자바스크립트에서 함수는 object이다.

```js
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);
```

- 위 log함수 같은 경우 파라미터를 받아 출력하기만 해서, 파라미터의 타입은 중요하지않다.
- 그러나, 다른 역할을 하는 함수의 경우 파라미터의 타입이 문제가 될 수 있다.

### TypeScript 함수에서의 변수 타입

```ts
function log(message: string): number {
  console.log(message);
  return 0;
}
```

- 파라미터의 타입과 리턴 타입을 지정할 수 있다.
- [Typescript to Javascript](https://www.typescriptlang.org/play)

## Parameters

- premitive parameters : 메모리에 값이 저장되어있기 때문에 값이 전달
- object parameters : 메모리에 레퍼런스가 저장되어있기 때문에 레퍼런스가 전달

```js
function changeName(obj) {
  obj.name = "coder";
}
const mulgyeol = { name: "mulgyeol" };
changeName(mulgyeol);
console.log(mulgyeol); // coder
```

### Default parameters

- ES6에 추가 되었다.
- 파라미터 값이 들어오지 않을 경우를 대비해 디폴트 값을 정해줄 수 있다.

```js
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");
```

### Rest Parameters

- ES6에 추가되었다.
- `...arg`로 파라미터를 설정해 놓으면, 하나의 배열 형태로 파라미터를 전달 받는다.

```js
function printAll(...args) {
  //index를 통한 반복문
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // of 반복문
  for (const arg of args) {
    console.log(arg);
  }

  //forEach
  args.forEach((arg) => console.log(arg));
}
printAll("banana", "orange", "apple");
```

## Local scope

- 밖에서는 안이 보이지 않고 `안에서만 밖을 볼 수 있다.`

```js
let globalMessage = "global"; // global variable

function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error
}
printMessage();
```

## Return

```js
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
```

- return 타입이 없는 함수들은 `return undefined;`이 들어가 있는 것과 같다.

### Early Return

- 블럭 안에서 코드를 길게 작성하면 가독성이 좋지 않다.
- 조건이 맞지 않으면 빠르게 리턴하고, 블럭 밖에서 코드를 작성한다.

```js
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
```

## First-class function

- 함수는 다른 변수처럼 다뤄진다.
- 함수는 변수에 하나의 값으로 할당될 수 있다.
- 함수는 다른 함수의 파라미터로 전달이 가능하다.
- 함수는 다름 함수의 리턴값으로 전달이 가능하다.

### Function Expression

- 이름이 없는 함수를 `anonymous function`
- 이름이 있는 함수를 `named function`이라고 한다.
  - name function은 debugging에서 stack trace에 함수 이름을 확인하기 위해 쓰인다.
  - 또는, 함수 안에서 자기 스스로를 호출할 때 쓰인다.
- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.

```js
const print = function () {
  // anonymous function
  console.log("print");
};

print();
const printAgain = print;
printAgain();

const sumAgain = sum; // 위에서 만든 함수
console.log(sumAgain(1, 3));
```

## Callback function

- 함수에 파라미터로 함수가 전달되어서, (조건에 따라) 호출되는 함수를 콜백함수라고 한다.

```js
// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
```

### Arrow function

- function 키워드가 필요없다.
- 내용이 한줄이면 `{}`도 필요없다.
- return도 필요없이 그대로 써준다.
- 내용이 길다면 `{}`를 쓰고, return을 명시해준다.

```js
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
```

### IIFE : Immediately Invoked Function Expression

- 함수를 선언함과 동시에 실행시키는 방법이다.
- 함수 전체를 `()` 괄호로 묶고, 바로 이어서 `()`로 실행시켜준다.
- 잘 쓰이지는 않는다.

```js
(function hello() {
  console.log("IIFE");
})();
```

### 계산기 함수 만들기 Quiz

```js
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 2, 3));
```
