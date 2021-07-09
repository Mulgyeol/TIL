---
description: "Javascript_06 - Object"
date: 2021-07-09
tags: ["Javascript"]
---

# Javascript_06 - Object

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Object

- Object는 Javascript의 데이터 중 하나이다.
- 관련된 데이터나(와) 기능의 집합니다.
- 거의 모든 Javascript의 object는 Object의 instance이다.

### Literals and properties

```js
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const mulgyeol = { name: "mulgyeol", age: 4 };
print(mulgyeol);
```

- 동적으로 property를 추가하거나 삭제하는 것도 가능하다.

```js
// with JavaScript magic (dynamically typed language)
// can add properties later
mulgyeol.hasJob = true;
console.log(mulgyeol.hasJob);

// can delete properties later
delete mulgyeol.hasJob;
console.log(mulgyeol.hasJob);
```

### Computed properties

- Computed properties는 key값이 고정되어있지 않을 때, 유용하다.

```js
// key should be always string
console.log(mulgyeol.name);
console.log(mulgyeol["name"]);
mulgyeol["hasJob"] = true;
console.log(mulgyeol.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(mulgyeol, "name");
printValue(mulgyeol, "age");
```

### Constructor Function & Property value shorthand

```js
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// property와 value의 값이 갔다면 ,를 쓰고 뒷 내용 생략이 가능하다.
// function makePerson(name, age) {
//    return{
//      name,
//      age,
//    };
// }

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("elile", 30);
console.log(person4);
```

### in operator

- property existence check (key in obj)

```js
console.log("name" in mulgyeol);
console.log("age" in mulgyeol);
console.log("random" in mulgyeol); //false
console.log(mulgyeol.random); // undefined
```

### for .. in vs for .. of

```js
// for (key in obj)
for (let key in mulgyeol) {
  console.log(key);
}

// for (value of iterable)
// 순차적으로 literable한 배열 등에서 쓰인다.
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}
```

### cloning

```js
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "mulgyeol", age: "20" };
const user2 = user;
console.log(user);

// old way
// 새로운 객체를 생성해 내용만 복사한다.
// 이 방법은 user3와 user가 같은 객체가 아니다.
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Obejct.assign(user4, user);

// 이렇게 써도 좋다.
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };

// 같은 property가 있다면 값이 덮어 씌워진다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
```
