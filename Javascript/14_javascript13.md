---
description: "Javascript_13 - ES6, ES11 최신 문법과 사용법 정리"
date: 2021-07-11
tags: ["Javascript"]
---

# Javascript_13 - ES6, ES11 최신 문법과 사용법 정리

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## ES6

### Shorthand property names

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)

```js
{
  const mulgyeol1 = {
    name: "Mulgyeol",
    age: "18",
  };

  const name = "Ellie";
  const age = "18";

  // Bad
  const mulgyeol2 = {
    name: name,
    age: age,
  };

  // Good
  const mulgyeol3 = {
    name,
    age,
  };

  console.log(mulgyeol1, mulgyeol2, mulgyeol3);
}
```

### Destructuring Assignment

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
{
  // object => {}
  const student = {
    name: "Anna",
    level: 1,
  };

  // bad
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // good
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array => []
  const animals = ["dog", "cat"];

  // bad
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // good
  // 배열의 순서에 맞춰준다.
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}
```

### Spread Syntax

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```js
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "ket2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { ket: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // obejct copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ["🍑", "🍓"];
  const fruits2 = ["🍌", "🥝"];
  const fruits = [...fruits1, ...fruits2]; // 하나로 병합
  console.log(fruits);

  // object merge
  const dog1 = { dog: "🐕" };
  const dog2 = { dog: "🐶" };
  // 참고) key가 동일한 object들을 병합한다면 뒤에 오는 object의 value가 덮어씌운다.
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  console.clear();
}
```

### Default parameters

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)

```js
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }

  // ✨
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
  console.clear();
}
```

### Ternary Operator

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = "😸";
    } else {
      component = "🐶";
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? "😸" : "🐶";
    console.log(component);
    console.log(isCat ? "😸" : "🐶");
  }
}
```

### Template Literals

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

```js
{
  const weather = "🌤";
  const temparature = "16°C";

  // 💩
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  );

  // ✨

  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
```

## ES11

### Optional Chaining

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```js
{
  const person1 = {
    name: "Ellie",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "Bob",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      // && : 앞에 것이 true면 뒤에 것이 적용된다.
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    console.log("this is");
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}
```

### Nullish Coalescing Operator

- [ref](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

```js
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = "Mulgyeol";
    const userName = name || "Guest"; //앞에 있는 것이 false이면 뒤에 것이 적용
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
  }

  // 💩
  {
    const name = ""; // 아무런 이름을 적고 싶지 않을 때도 뒤에 것이 적용되어 버린다.
    const userName = name || "Guest";
    console.log(userName);

    const num = 0; // 숫자 0이 할당되었지만 false로 간주되어 뒤에 것이 적용된다.
    const message = num || "undefined";
    console.log(message);
  }

  // ✨
  {
    const name = "";
    const userName = name ?? "Guest"; // 값이 없다면 Guest
    console.log(userName); // ''

    const num = 0;
    const message = num ?? "undefined"; // 값이 없다면 undefined
    console.log(message); // 0
  }
}
```
