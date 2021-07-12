---
description: "Javascript_12  - async 와 await 그리고 유용한 Promise APIs "
date: 2021-07-11
tags: ["Javascript"]
---

# Javascript_12 - async 와 await 그리고 유용한 Promise APIs

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## syntactic sugar

- 기존에 존재하는 것 위에, 혹은 감싸서 더 간편하게 쓸 수 있는 API를 제공하는 것.
- class : prototype base
- async&await : promise base

## async & awiat

- clear style of using promise :)

### async

```js
// 1. async
// function fetchUser() {
//     // do network request in 10 secs....
//     return new Promise((resolve, reject) => {
//         //resolve나 reject를 사용하지 않으면 계속 pending 상태이다.
//         resolve('mulgyeol');
//     });
// }

// async라는 키워드를 붙이게 되면 code block이 자동으로 promise로 바뀐다.
// syntactic sugar
async function fetchUser() {
  // do network request in 10 secs....
  return "mulgyeol";
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

### await

```js
// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(2000);
  //throw 'error';
  //사용하는 곳에서 try-catch로 받는다.
  return "apple";
}

async function getBanana() {
  await delay(1000); //delay가 끝날 때까지 기다려!
  return "banana";
}

// 위 함수는 아래 함수와 같다.
// function getBanana() {
//     return delay(3000)
//     .then(() => 'banana');
// }

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// 위 함수를 async로 고치면!
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     // 이 경우 apple을 얻어온 다음, banana를 얻어온다. 비효율적
//     return `${apple} + ${banana}`
// }

// 병렬적으로 실행
// 사실 이렇게도 안쓴다.
async function pickFruits() {
  const applePromise = getApple(); // 만들자 마자 실행 됨
  const bananaPromise = getApple(); // 만들자 마자 실행 됨
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

### useful Promise APIS

- Promise.all([...])

```js
// Promise.all([...])
// promise 배열을 전달하게 되면, 모든 promise들이 병렬적으로 다 받을 때까지 모아준다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);
```

- Promise.race([...])

```js
// Promise.race
// 어떤 것이든 상관없이, 먼저 받아와지는 것
function prickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

prickOnlyOne().then(console.log);
```
