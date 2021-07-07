---
description: "Javascript_02 - 데이터 타입"
date: 2021-07-07
tags: ["Javascript"]
---

# Javascript_02 - 데이터 타입

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Block scope

```js
//3. Blcok scope
let globalName = "global name";
{
  let name2 = "mulgyeol";
  console.log(name2);
  name2 = "hello";
  console.log(name2);
}

console.log(globalName);
console.log(name2); //error
```

- global 변수들은 어플리케이션이 시작된 순간부터 끝날 때까지 메모리를 차지하기 때문에 최소한으로 사용하는 것이 좋다.
- 가능하면 class, 함수, if, for-loop등 필요한 부분에서만 정의해서 쓰는 것이 좋다.

## const vs let vs var

- **const**
  - 선언할 때 값을 넣어줘야 한다.
  - 한 번 값을 넣으면 변경할 수 없는 상수를 담는 변수로 사용한다.
  - `Block Level Scope`를 갖는다.
  - `Thread safety` 하다.
- **let**
  - ES6에서 추가되었다.
  - 선언과 값 정의를 따로 할 수 있고, 넣은 값을 이후 얼마든지 바꿀 수 있다.
  - 선언을 다시 하는건 불가능하다.
  - `Block Level Scope`를 갖는다.
- **var**
  - 선언과 값 정의가 따로 가능하다.
  - 중복 선언이 가능하다.
  - `hoisting`이 일어난다.
  - 함수 안에 선언되기만 하면 블록에 선언되었다고 하더라도 해당 함수 안을 어디든 돌아다닐 수 있다.

### Scope

- 변수가 유효한 영역(블록)
- 함수에 속해서 내부 변수의 값을 들여다 보는 곳

### Hoisting

- `hoisting` : 작성한 선언 위치에 상관없이 파일 제일 위로 선언 끌어올린다.
- const나 let도 hoisting이 안되는 것은 아니다. 속한 스코프의 최상단으로 호이스팅 되지만 선언되어서 초기화 되기 전까지는 `TDZ`에 속한다. 여기서 const나 let으로 이후에 선언된 것을 미리 사용하게 되면 오류가 난다.

## Variable types

- primitive, single item: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`
- object, box container
- function, first-class function

### number - special numeric values

- infinity
- -infinity
- NaN

### bigint(아직 chrome과 firefox만 지원)

- number는 `-2**53 ~ 2**53` 범위의 숫자만 표현이 가능한데, bigint는 이를 넘어선 범위의 숫자도 표현이 가능하다.

```js
// bigInt(fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//result
value: 1234567890123456789012345678901234567890, type: bigint

```

### string

- template literals : 백틱(``)과 `${}`를 이용한 문자열 표기
  - `${}` 안에 변수를 넣으면 값이 들어간다.

```js
// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


//result
value: hello brendan, type: string
value: hi brendan!, type: string
```

### boolean

- false : 0, null, undefinded, Nan, ''(빈문자열)
- true : 그 외 모든 값

```js
// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//result
value: true, type: boolean
value: false, type: boolean
```

### null

- 개발자가 의도적으로 값이 비었다고 지정해준 것.

```js
// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//result
value: null, type: object
```

### undefined

- 선언은 되었지만 지정된 값이 없는, 지정되지 않은 것.

```
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//result
value: undefined, type: undefined
```

### symbol

- Map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 식별자를 준다.

```js
// symbol, create unique identifiers for objects

//같은 string을 쓰더라도 다르다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// string을 key로 하여 같은 것이 되게끔 한다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error


//result
false
true
value: id, type: symbol

```

## Dynamic typing: dynamically typed language

- Javascript는 런타임에 할당된 값에 따라 type이 변경될 수 있다.

```js
// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // string으로 변환된다.
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // number타입으로 바뀌고 연산이 실행된다.
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error


//result
h
value: hello, type: string
value: 1, type: number
value: 75, type: string
value: 4, type: number
```
