---
description: "Javascript_11  - Promise의 개념과 활용"
date: 2021-07-11
tags: ["Javascript"]
---

# Javascript_11 - Promise의 개념과 활용

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Promise

- Promise is a JavaScript object for asynchronous operation.
- Point
  1. State : pending(수행중) -> fulfilled(완료한 상태) -> rejected(파일을 찾을 수 없거나, 문제가 생긴 경우)
  2. Producer and Consumer

### Producer

- when new Promise is created, the executor runs automatically.
- resolve : 잘 마무리 했을 때, 호출
- reject : 실패했을 때, 왜 실패했는지를 전달

```js
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('mulgyeol');
        //reject(new Error('no network'));
    }, 2000);
```

### Consumer

- 2. Consumers: then, catch, finally
- then : promise가 정상적으로 잘 수행이 된다면,
  - value : resolve가 정상적으로 수행되었을 때, 전달 받은 값
- catch : 에러가 발생하면
  - error : reject에서 전달받은 에러사항, 원하는 방식으로 처리
- finally : 성공, 실패와 상관없이 무조건 실행된다.

```js
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
```

### Promise chaining

```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
// then은 값을 바로 전달해도 되고, 다른 Promise를 전달해도 된다.
fetchNumber
  .then((num) => num * 2) // 2, 이 값이 다음 then의 num으로 들어간다.
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5
```

### Error Handling

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => Egg`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => Egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => Cook`), 1000);
  });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

// code를 깔끔하게
// callback함수를 전달할 때, 받아온 value를 다른 함수에서 바로 하나로 호출하는 경우, 생략이 가능하다.
// 아래 코드는 위에 주석된 코드와 일치한다.
getHen()
  .then(getEgg)
  .catch((error) => {
    // 달걀을 받아올 때, 문제가 생긴다면 빵을 리턴한다.
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log); // 중간에 에러가 발생했는데, 잡아주지 않으면 마지막에서 잡힌다.
```

### Callback-to-Promise

1. Callback

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

// 1. 사용자에게 id와 pass를 입력받기
// 2. 서버에 로그인 요청
// 3. 로그인에 성공하면 역할을 받아온다.
// 4. 이름과 역할이 담겨있는 obejct를 요청해서 받아와 출력한다.

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

2. Promise

```js
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "mulgyeol" && password === "apple") ||
          (id === "coder" && password === "melon")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "mulgyeol") {
          resolve({ name: "mulgyeol", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// callback hell code to promise
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles) // 인자가 같으니 생략
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
```
