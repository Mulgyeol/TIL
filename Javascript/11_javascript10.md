---
description: "Javascript_10  - async1, 콜백 지옥 체험하기"
date: 2021-07-11
tags: ["Javascript"]
---

# Javascript_10 - async1, 콜백 지옥 체험하기

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## callback

### 동기와 비동기

- JavaScript is synchronous.
- 호이스팅 된 이후로 코드가 작성한 순서에 맞춰 동기적으로 실행된다.
- hoisting : var, function declaration이 제일 위로 올라가는 것

```js
//동기
console.log("1");
console.log("2");
console.log("3");

// 비동기
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// callback함수 : 우리가 전달해준 함수를 나중에 니가 불러줘.
// setTimeout : browser API, ?ms 뒤에 요청한 함수를 실행해 줘.
// browser API는 브라우저에게 먼저 요청을 한다.
```

### callback 정리

- Synchronous callback
- Asynchronous callback

```js
// 함수 선언은 hoisting 된다.

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);
```

### callback hell 체험하기

- class 정의

```js
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "mulgyeol" && password === "apple") ||
        (id === "coder" && password === "melon")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "mulgyeol") {
        onSuccess({ name: "mulgyeol", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
```

- 흐름
  1. 사용자에게 id와 pass를 입력받기
  2. 서버에 로그인 요청
  3. 로그인에 성공하면 역할을 받아온다.
  4. 이름과 역할이 담겨있는 obejct를 요청해서 받아와 출력한다.

```js
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

### 콜백 체인의 문제점

1. 가독성이 좋지 않다.
2. 비지니스 로직을 한 눈에 이해하기 어렵다.
3. 디버깅 유지보수가 어렵다.
