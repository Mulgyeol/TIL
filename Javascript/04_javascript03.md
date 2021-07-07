---
description: "Javascript_03 - operator, if, for loop"
date: 2021-07-07
tags: ["Javascript"]
---

# Javascript_03 - operator, if, for loop

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## String concatenation

```js
// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:
....
1 + 2 = ${1 + 2}`);
console.log("ellie's \n\tbook");
```

## Numeric operators

```js
// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);
```

## Increment and decrement operators

```js
// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
```

## Assignment operator

```js
// 4. Assignment operator
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
```

## Comparison Operator

- <, <=, >, >=

```js
// 5. Comparison Operator <, <=, >, >=
```

## Logival operators

- ||(or), &&(and), !(not)

```js
// 6. Logival operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;
// || (or), finds the first truthy value
// 가벼운 것을 앞으로
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 가벼운 것을 앞으로
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if( nullableObject != null){
//     nullableObject.somting;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("wasting time");
  }
  return true;
}

// !(not)
console.log(!value1);
```

## Equality

```js
// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
// 문자열이긴 한데 안에 들어있는 건 숫자 5니 너넨 같다.
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion, 권장
// 타입까지 고려한다.
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const mulgyeol1 = { name: "mulgyeol" };
const mulgyeol2 = { name: "mulgyeol" }; //mulgyeol1과 다른 곳을 가리킴
const mulgyeol3 = mulgyeol1; // mulgyeol1과 같은 곳을 가리킴
console.log(mulgyeol1 == mulgyeol2); //false, 주의 ref가 다르다.
console.log(mulgyeol1 === mulgyeol2); //false
console.log(mulgyeol1 === mulgyeol3); //true

// equality test
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

## Conditional operators

- if, else if, else

```js
// 8. Conditional operators: if
// if, else if, else
const name = "coder";
if (name === "mulgyeol") {
  console.log("Welcome, mulgyeol!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}
```

## Ternary operator

- ?

```js
// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "Ivan" ? "yes" : "no");
```

## Switch statement

```js
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
```

## Loops

```js
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
```
