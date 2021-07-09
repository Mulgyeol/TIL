---
description: "Javascript_07 - Array개념과 APIs"
date: 2021-07-09
tags: ["Javascript"]
---

# Javascript_07 - Array개념과 APIs

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Array

### Object와 Array의 차이점?

- Array는 자료구조의 하나이다.
- Object가 동물이라면 자료구조는 동물 중 토끼들의 집합 정도로 이해하면 좋다.
- 같은 타입의 자료들을 묶어 놓는 용도로 사용하면 좋다.

### Declaration

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

### Index Position

```js
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //🍎
console.log(fruits[1]); //🍌
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //마지막 인덱스에 접근
```

### Looping over an array

```js
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach는 콜백함수를 받아온다.
// fruits.forEach(function(fruit, index, array){
//    console(fruit, index, array);
// });

fruits.forEach((fruit) => console.log(fruit));
```

### Addtion, deletion, copy

```js
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑"]

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits); // ["🍎", "🍌"]

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍋"); //["🍓", "🍋", "🍎", "🍌"]
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); //["🍎", "🍌"]

// note!! shift, unshift are slower than pop, push
// 기존의 데이터를 움직여야 하기 때문에 배열의 길이가 길수록 느리다.

// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits); //["🍎", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1, 1); //deleteCount를 지정하지 않으면 start부터 끝까지 다 지운다.
console.log(fruits); //["🍎", "🍓", "🍑", "🍋"]
fruits.splice(1, 0, "🍏", "🍉"); // 데이터를 넣는 것!
console.log(fruits); //["🍎", "🍏", "🍉", "🍓", "🍑", "🍋"]

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //["🍎", "🍏", "🍉", "🍓", "🍑", "🍋", "🍐", "🥥"]
```

### Searching

```js
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.indexOf("🍉")); // 2
console.log(fruits.indexOf("🥥")); // -1 값이 존재하지 않는 경우

// includes
console.log(fruits.includes("🍉")); // true
console.log(fruits.includes("🥥")); // false

// lastIndexOf
fruits.push("🍎"); // 사과가 여러 개라면?
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 가장 먼저 만나는 것
console.log(fruits.lastIndexOf("🥥")); // 가장 마지막에 있는 것
```
